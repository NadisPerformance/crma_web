import gql from 'graphql-tag'

export const get_colors = gql`
{
    colors {
    edges{
        node{
            id
            name
        }
    }
  }
}
`
