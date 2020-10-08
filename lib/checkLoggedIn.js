import gql from 'graphql-tag'

export default (apolloClient) => {
  return apolloClient
    .query({
      query: gql`
        query me{
          me{
            id
            nom
            prenom
            email
          }
        }
      `
    })
    .then(({ data }) => {
      return { loggedInUser: data.me }
    })
    .catch(e => {
      // Fail gracefully
      return { loggedInUser: null }
    })
}