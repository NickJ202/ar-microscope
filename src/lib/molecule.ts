import { always, compose, concat, equals, identity,ifElse, join, map, path, pluck, split, takeLast, uniqBy } from 'ramda'

const url = 'https://arweave.net/graphql'
const host = getHost(window.location.hostname);

export function getRendererURL(tx: string): Promise<string> {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: rendererQuery(),
      variables: {
        id: tx
      }
    })
  })
    .then((res: any) => res.json())
    .then(data => {
      const renderWith = data.data.transaction.tags.find(t => t.name === 'Render-With')?.value
      if (renderWith && renderWith.length === 43) {
        return `https://arweave.net/${renderWith}/?tx=${tx}`
      } else if (renderWith) {
        return `https://${renderWith}.${host}/?tx=${tx}`
      } else {
        return `https://arweave.net/${tx}`
      }
    })
    .then()
}

export function elements(tx: string): Promise<{ id: string, parent: string }[]> {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: rootQuery(),
      variables: {
        tx
      }
    })
  })
    .then(res => res.json())
    .then(path(['data', 'transaction']))
    .then(root => [{ data: { id: root.id, group: 'nodes' } }])
    .then(elements =>
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: nodeQuery(),
          variables: {
            "sources": [tx]
          }
        })
      })
        .then(res => res.json())
        .then(compose(pluck('node'), path(['data', 'transactions', 'edges'])))
        .then(uniqBy(path(['owner', 'address'])))
        .then(nodes => {
          const ns = map(n => ({ data: { id: n.id, group: 'nodes' } }), nodes)
          const edges = map(e => ({ data: { id: `e${e.id}`, source: tx, target: e.id, group: 'edges' } }), nodes)
          return compose(
            concat(elements),
            concat(ns)
          )(edges)
        })
    )

}

function getHost(hostname) {
  return compose(
    ifElse(equals("gitpod.io"), always("arweave.dev"), identity),
    ifElse(equals("localhost"), always("arweave.dev"), identity),
    join("."),
    takeLast(2),
    split(".")
  )(hostname);
}

function rootQuery() {
  return `query Root($tx : ID!) {
    transaction(id: $tx) {
      id 
      owner { address } 
      tags {
        name
        value
      }
    }
}`

}

function nodeQuery() {
  return `query Nodes($sources:[String!]!) {
transactions(first:100, tags:{name:"Data-Source", values:$sources}) {
  edges {
    node {
      id 
      owner  { address }
      tags {
        name 
        value 
      }
    }
  }
}}`

}

function rendererQuery() {
  return `query($id: ID!) {
transaction(id: $id) {
  id
  owner {address}
  tags {
    name
    value
  }
}    
  }`
}