import gql from 'graphql-tag'

export const get_brands = gql`
query get_brands($where:BrandWhereInput,$limit:Int!, $page:Int!){
    brands(where:$where,limit:$limit, page: $page) {
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

export const get_brand = gql`
query get_brand($brandId:ID!){
  brand(id:$brandId){
    id
    name
  }
}
`

export const get_brand_to_update = gql`
query get_brand_to_update($brandId:ID!){
  brand(id:$brandId){
    id
    name
  }
}
`

export const update_brand = gql`
  mutation update_brand($id: ID!, $data:BrandInput!)  {
    updateBrand(id:$id,data:$data){
        id
        name
    }
  }

`
export const create_brand = gql`
  mutation update_brand($data:BrandInput!)  {
    createBrand(data:$data){
        id
    }
  }

`

export const delete_brand = gql`
  mutation delete_brand($id: ID!)  {
    deleteBrand(id:$id){
        statut_code
        message
    }
  }

`

export default () => {
return "Show page working ! ";
}
