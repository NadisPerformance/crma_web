import gql from 'graphql-tag'
export default (apolloClient) => {
  console.log("hello from login")
  return apolloClient
    .query({
      query: gql`
        query me{
          me{
            id
            firstname
            lastname
            email
            role{
              id
              title
            }
          }
        }
      `
    })
    .then(({ data }) => {
      console.log(data)
      return { loggedInUser: data.me }
    })
    .catch(e => {
      console.log(e)
      // Fail gracefully
      return { loggedInUser: null }
    })
}
