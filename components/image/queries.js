import gql from 'graphql-tag'

export const create_image = gql`
  mutation create_image($data:ImageInput!)  {
    createImage(data:$data){
        id
        path
        image_url
    }
  }

`


export const delete_image = gql`
  mutation delete_image($id: ID!)  {
    deleteImage(id:$id){
        statut_code
        message
    }
  }

`

export default () => {
return "Show page working ! ";
}
