import gql from 'graphql-tag'

export const get_bookings = gql`
{
  bookings {
    edges{
        node{
            id
            carId
            customerId
            date_begin
            date_end
            montant_avance
            customer{
              id
              firstname
              lastname
              gender
            }
            car{
              id
              plate_number
            }

        }
    }
  }
}
`

export const get_booking = gql`
query booking($bookingId:ID!){
  booking(id:$bookingId){
    id

    carId
    customerId

    date_begin
    date_end
    montant_avance
    customer{
      id
      firstname
      lastname
      gender
      cni
      phone
      email
      address
      city
    }
    car{
      id
      plate_number
      model
      model_date
      price
      chassis_number
      category{
        id
        title
      }
      brand{
        id
        name
      }
      color{
        id
        name
      }
    }
  }
}
`
export const update_booking = gql`
  mutation update_booking($id: ID!, $data:BookingInput!)  {
    updateBooking(id:$id,data:$data){
      id
      carId
      customerId
      date_begin
      date_end
      montant_avance
    }
  }

`
export const create_booking = gql`
  mutation update_booking($data:BookingInput!)  {
    createBooking(data:$data){
        id
    }
  }

`

export const delete_booking = gql`
  mutation delete_booking($id: ID!)  {
    deleteBooking(id:$id){
        statut_code
        message
    }
  }

`

export default () => {
return "Show page working ! ";
}
