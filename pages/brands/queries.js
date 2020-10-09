import gql from 'graphql-tag'

export const get_brands = gql`
{
    brands {
    edges{
        node{
            id
            name
        }
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

export default () => {
return "Show page working ! ";
}
