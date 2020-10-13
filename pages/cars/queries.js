import gql from 'graphql-tag'

export const get_cars = gql`
{
  cars {
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