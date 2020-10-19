import gql from 'graphql-tag'



export const get_before_rental_to_update = gql`
query before_rental($beforeRentalId:ID!){
  before_rental(id:$beforeRentalId){
    id
    kilometrage
    niveau_carburant
    comment
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

export const update_before_rental = gql`
  mutation update_before_rental($id: ID!, $data:Before_rentalInput!)  {
    updateBeforeRental(id:$id,data:$data){
      id
      rentalId
      comment
    }
  }

`
export const create_before_rental = gql`
  mutation create_before_rental($data:Before_rentalInput!)  {
    createBeforeRental(data:$data){
        id
        rentalId
    }
  }

`

export const delete_booking = gql`
  mutation delete_before_rental($id: ID!)  {
    deleteBeforeRental(id:$id){
        statut_code
        message
    }
  }

`

export default () => {
return "Show page working ! ";
}
