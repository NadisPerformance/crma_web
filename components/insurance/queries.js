import gql from 'graphql-tag'

export const get_insurances = gql`
{
  insurances {
    edges{
        node{
            id
            name
        }
    }
  }
}
`
export const get_insurance = gql`
query get_insurance($insuranceId:ID!){
  insurance(id:$insuranceId){
    id
    name
  }
}
`
export const update_insurance = gql`
  mutation update_insurance($id: ID!, $data:InsuranceInput!)  {
    updateInsurance(id:$id,data:$data){
        id
        name
    }
  }

`
export const create_insurance = gql`
  mutation update_insurance($data:InsuranceInput!)  {
    createInsurance(data:$data){
        id
    }
  }

`

export const delete_insurance = gql`
  mutation delete_insurance($id: ID!)  {
    deleteInsurance(id:$id){
        statut_code
        message
    }
  }

`

export default () => {
return "Show page working ! ";
}
