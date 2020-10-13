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
            
        }
    }
  }
}
`

export const get_rental = gql`
query get_rental($rentalId:ID!){
  rental(id:$rentalId){
        id
        plate_number
        brandId
        model
        model_date
        categoryId
        price
        colorId
        chassis_number
        statusId
        brand{
          id
          name
        }
  }
}
`
export const update_rental = gql`
  mutation update_rental($id: ID!, $data:RentalInput!)  {
    updateRental(id:$id,data:$data){
        id
            plate_number
            brandId
            model
            model_date
            categoryId
            price
            colorId
            chassis_number
            statusId
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