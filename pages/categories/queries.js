import gql from 'graphql-tag'

export const get_categories = gql`
{
    categories {
    edges{
        node{
            id
            title
        }
    }
  }
}
`
