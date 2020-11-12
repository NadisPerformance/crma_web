import gql from 'graphql-tag'

export const get_bookings = gql`
query get_bookings($where:BookingWhereInput,$limit:Int!, $page:Int!){
  bookings (where:$where, limit:$limit, page: $page){
    edges{
        node{
            id
            carId
            customerId
            date_begin
            date_end
            montant_avance
            comment
            customer{
              id
              firstname
              lastname
              gender
            }
            car{
              id
              plate_number
              color{
                id
                name
              }
            }

        }
    }
    pageInfo {
      count
      currentPage
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
    comment
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
      colorId
      categoryId
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

export const get_booking_to_update = gql`
query booking($bookingId:ID!){
  booking(id:$bookingId){
    id
    carId
    customerId
    date_begin
    date_end
    montant_avance
    comment
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
      colorId
      categoryId
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
      comment
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

export const convert_to_rental = gql`
  mutation convert_to_rental($id:ID!)  {
    convertBookingToRental(id:$id){
        id
    }
  }

`
export default () => {
return "Show page working ! ";
}
