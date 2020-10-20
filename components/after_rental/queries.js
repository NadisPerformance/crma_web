import gql from 'graphql-tag'



export const get_after_rental_to_update = gql`
query after_rental($afterRentalId:ID!){
  after_rental(id:$afterRentalId){
    id
    kilometrage
    niveau_carburant
    comment
    albumId
    album{
      id
      images{
        id
        path
        image_url
      }
    }
  }
}
`

export const update_after_rental = gql`
  mutation update_after_rental($id: ID!, $data:After_rentalInput!)  {
    updateAfterRental(id:$id,data:$data){
      id
      rentalId
      comment
    }
  }

`
export const create_after_rental = gql`
  mutation create_after_rental($data:After_rentalInput!)  {
    createAfterRental(data:$data){
        id
        rentalId
    }
  }

`

export const delete_booking = gql`
  mutation delete_after_rental($id: ID!)  {
    deleteAfterRental(id:$id){
        statut_code
        message
    }
  }

`

export default () => {
return "Show page working ! ";
}
