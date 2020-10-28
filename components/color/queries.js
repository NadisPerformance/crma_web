import gql from 'graphql-tag'

export const get_colors = gql`
query get_colors($limit:Int!, $page:Int!){
    colors(limit:$limit, page: $page) {
    edges{
        node{
            id
            name
        }
    }
    pageInfo {
      count
      currentPage
    }
  }
}
`
export const get_color = gql`
query get_color($colorId:ID!){
  color(id:$colorId){
    id
    name
  }
}
`
export const update_color = gql`
  mutation update_color($id: ID!, $data:ColorInput!)  {
    updateColor(id:$id,data:$data){
        id
        name
    }
  }

`
export const create_color = gql`
  mutation update_color($data:ColorInput!)  {
    createColor(data:$data){
        id
    }
  }

`

export default () => {
return "Show page working ! ";
}
