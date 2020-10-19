import gql from 'graphql-tag'

export const get_albums = gql`
{
    albums {
    edges{
        node{
            id
            title
        }
    }
  }
}
`
export const get_color = gql`
query get_album($albumId:ID!){
  album(id:$albumId){
    id
    title
  }
}
`
export const update_album = gql`
  mutation update_album($id: ID!, $data:AlbumInput!)  {
    updateAlbum(id:$id,data:$data){
        id
        title
    }
  }

`
export const create_album = gql`
  mutation create_album($data:AlbumInput!)  {
    createAlbum(data:$data){
        id
    }
  }

`

export default () => {
return "Show page working ! ";
}
