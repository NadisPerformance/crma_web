import gql from 'graphql-tag'

export const get_rentals = gql`
{
  rentals {
    edges{
        node{
            id
            bookingId
            carId
            customerId
            second_driverId
            date_begin
            date_end
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

export const get_rental = gql`
query get_rental($rentalId:ID!){
  rental(id:$rentalId){
    id
    bookingId
    carId
    customerId
    second_driverId
    date_begin
    date_end
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
export const update_rental = gql`
  mutation update_rental($id: ID!, $data:RentalInput!)  {
    updateRental(id:$id,data:$data){
      id
      bookingId
      carId
      customerId
      second_driverId
      date_begin
      date_end
    }
  }

`
export const create_rental = gql`
  mutation update_rental($data:RentalInput!)  {
    createRental(data:$data){
        id
    }
  }

`

export const delete_rental = gql`
  mutation delete_rental($id: ID!)  {
    deleteRental(id:$id){
        statut_code
        message
    }
  }

`