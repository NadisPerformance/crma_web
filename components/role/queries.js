import gql from 'graphql-tag'

export const get_roles = gql`
{
    roles {
    edges{
        node{
            id
            title
        }
    }
  }
}
`

export default () => {
return "Show page working ! ";
}
