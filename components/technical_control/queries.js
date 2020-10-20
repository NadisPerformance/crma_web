import gql from 'graphql-tag'

export const get_technical_controls = gql`
{
  technical_controls {
    edges{
        node{
          id
          carId
          date_begin
          date_end
        }
    }
  }
}
`
export const get_technical_control = gql`
query get_technical_control($technical_controlId:ID!){
  technical_control(id:$technical_controlId){
    id
    carId
    date_begin
    date_end
    car{
      
    }
  }
}
`

export const get_technical_control_to_update = gql`
query get_technical_control_to_update($technical_controlId:ID!){
  technical_control(id:$technical_controlId){
    id
    carId
    date_begin
    date_end
  }
}
`

export const update_technical_control = gql`
  mutation update_technical_control($id: ID!, $data:technical_controlInput!)  {
    updateTechnicalControl(id:$id,data:$data){
      id
      carId
      date_begin
      date_end
    }
  }

`
export const create_technical_control = gql`
  mutation update_technical_control($data:technical_controlInput!)  {
    createTechnicalControl(data:$data){
        id
    }
  }

`

export const delete_technical_control = gql`
  mutation delete_technical_control($id: ID!)  {
    deleteTechnicalControl(id:$id){
        statut_code
        message
    }
  }

`

export default () => {
return "Show page working ! ";
}
