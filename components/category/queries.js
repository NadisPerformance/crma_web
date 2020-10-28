import gql from 'graphql-tag'

export const get_categories = gql`
query get_categories($limit:Int!, $page:Int!){
    categories(limit:$limit, page: $page) {
    edges{
        node{
            id
            title
        }
    }
    pageInfo {
      count
      currentPage
    }
  }
}
`

export const get_category = gql`
query get_category($categoryId:ID!){
  category(id:$categoryId){
    id
    title
  }
}
`
export const update_category = gql`
  mutation update_category($id: ID!, $data:CategoryInput!)  {
    updateCategory(id:$id,data:$data){
        id
        title
    }
  }

`
export const create_category = gql`
  mutation update_category($data:CategoryInput!)  {
    createCategory(data:$data){
        id
    }
  }

`

export default () => {
return "Show page working ! ";
}
