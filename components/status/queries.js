import gql from 'graphql-tag'

export const get_statuss = gql`
{
    statuss {
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
