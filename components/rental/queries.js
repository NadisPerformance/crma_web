import gql from 'graphql-tag'

export const get_rentals = gql`
query get_rentals($where:RentalWhereInput,$limit:Int!, $page:Int!){
  rentals (where:$where, limit:$limit, page: $page){
    edges{
        node{
            id
            bookingId
            carId
            customerId
            second_driverId
            date_begin
            date_end
            scanned_contract
            scanned_contract_url
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
    pageInfo {
      count
      currentPage
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
    montant_avance
    scanned_contract
    scanned_contract_url
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
    before_rental{
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
    after_rental{
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
    bill{
      id
      total_ht
      total_ttc
      payment_method{
        id
        title
      }
    }
  }
}
`

export const get_rental_to_update = gql`
query get_rental($rentalId:ID!){
  rental(id:$rentalId){
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

export default () => {
return "Show page working ! ";
}
