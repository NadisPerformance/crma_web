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
