import { compose, concat, map, path, pluck, uniqBy } from 'ramda'

const url = 'https://arweave.net/graphql'

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