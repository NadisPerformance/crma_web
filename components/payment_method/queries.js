import gql from 'graphql-tag'

export const get_payment_methods = gql`
{
    payment_methods {
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
