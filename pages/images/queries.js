import gql from 'graphql-tag'

export const create_image = gql`
  mutation create_image($data:ImageInput!)  {
    createImage(data:$data){
        id
    }
  }

`
