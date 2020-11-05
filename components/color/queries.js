import gql from 'graphql-tag'

export const get_colors = gql`
query get_colors($where:ColorWhereInput,$limit:Int!, $page:Int!){
    colors(where:$where,limit:$limit, page: $page) {
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

export const get_color_to_update = gql`
query get_color_to_update($colorId:ID!){
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

export const delete_color = gql`
  mutation delete_color($id: ID!)  {
    deleteColor(id:$id){
        statut_code
        message
    }
  }

`

export default () => {
return "Show page working ! ";
}
