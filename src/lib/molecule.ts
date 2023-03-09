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
    .then(result =>
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
    )
    .then(sources => [])

}

function rootQuery() {
  return `query Root($tx : String!) {
    transaction {
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