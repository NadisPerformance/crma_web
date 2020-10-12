import gql from 'graphql-tag'

export const get_customers = gql`
{
    customers {
    edges{
        node{
            id
            firstname
            lastname
            birthday
            gender
            cni
            type
            driver_license
            city
            address
            email
            phone
            company_name
        }
    }
  }
}
`

export const get_customer = gql`
query get_customer($customerId:ID!){
  customer(id:$customerId){
    id
    firstname
    lastname
    birthday
    gender
    cni
    type
    driver_license
    city
    address
    email
    phone
    company_name
  }
}
`
export const update_customer = gql`
  mutation update_customer($id: ID!, $data:CustomerInput!)  {
    updateCustomer(id:$id,data:$data){
        id
        firstname
        lastname
        birthday
        gender
        cni
        type
        driver_license
        city
        address
        email
        phone
        company_name
    }
  }

`
export const create_customer = gql`
  mutation update_customer($data:CustomerInput!)  {
    createCustomer(data:$data){
        id
    }
  }

`

export default () => {
return "Show page working ! ";
}
