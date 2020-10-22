import gql from 'graphql-tag'

export const get_car_insurances = gql`
{
  car_insurances {
    edges{
        node{
          id
          carId
          insuranceId
          date_begin
          date_end
        }
    }
  }
}
`
export const get_car_insurance = gql`
query get_car_insurance($car_insuranceId:ID!){
  car_insurance(id:$car_insuranceId){
    id
    carId
    insuranceId
    date_begin
    date_end
    insurance{
      name
    }
  }
}
`

export const get_car_insurance_to_update = gql`
query get_car_insurance_to_update($car_insuranceId:ID!){
  car_insurance(id:$car_insuranceId){
    id
    carId
    insuranceId
    date_begin
    date_end
  }
}
`

export const update_car_insurance = gql`
  mutation update_car_insurance($id: ID!, $data:Car_insuranceInput!)  {
    updateCarInsurance(id:$id,data:$data){
      id
      carId
      insuranceId
      date_begin
      date_end
    }
  }

`
export const create_car_insurance = gql`
  mutation update_car_insurance($data:Car_insuranceInput!)  {
    createCarInsurance(data:$data){
        id
        carId
        insuranceId
    }
  }

`

export const delete_car_insurance = gql`
  mutation delete_car_insurance($id: ID!)  {
    deleteCarInsurance(id:$id){
        statut_code
        message
    }
  }

`

export default () => {
return "Show page working ! ";
}
