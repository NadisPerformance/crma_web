import gql from 'graphql-tag'

export const get_cars = gql`
query get_cars($where:CarWhereInput, $limit:Int!, $page:Int!){
  cars(where:$where, limit:$limit, page: $page){
    edges{
        node{
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
            picture_url
            picture
            scanned_grey_card_url
            scanned_grey_card
            brand{
              id
              name
            }
            category{
              id
              title
            }
            color{
              id
              name
            }
            status{
              id
              title
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

export const get_car = gql`
query get_car($carId:ID!){
    car(id:$carId){
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
        picture
        picture_url
        scanned_grey_card
        scanned_grey_card_url
        createdAt
        updatedAt
        brand{
          id
          name
        }
        category{
          id
          title
        }
        color{
          id
          name
        }
        status{
          id
          title
        }
        car_insurances{
          id
          date_begin
          date_end
          scanned_car_insurance_url
          insurance{
            id
            name
          }
        }
        technical_controls{
          id
          scanned_technical_control_url
          date_begin
          date_end
          scanned_technical_control_url
        }
        rentals{
          id
          date_begin
          date_end
          customer{
            id
            firstname
            lastname
          }
        }
        bookings{
          id
          date_begin
          date_end
          customer{
            id
            firstname
            lastname
          }
        }
  }
}
`

export const get_car_to_update = gql`
query get_car_to_update($carId:ID!){
    car(id:$carId){
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

export const update_car = gql`
  mutation update_car($id: ID!, $data:CarInput!)  {
    updateCar(id:$id,data:$data){
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
        category{
          id
          title
        }
        color{
          id
          name
        }
    }
  }

`
export const create_car = gql`
  mutation update_car($data:CarInput!)  {
    createCar(data:$data){
        id
    }
  }

`

export const delete_car = gql`
  mutation delete_car($id: ID!)  {
    deleteCar(id:$id){
        statut_code
        message
    }
  }

`

export default () => {
return "Show page working ! ";
}
