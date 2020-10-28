import gql from 'graphql-tag'

export const get_customers = gql`
query get_customers($limit:Int!, $page:Int!){
    customers(limit:$limit, page: $page) {
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
            scanned_driver_license_url
            scanned_driver_license
            city
            address
            email
            phone
            company_name
        }
    }
    pageInfo {
      count
      currentPage
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
    scanned_driver_license_url
    scanned_driver_license
    city
    address
    email
    phone
    company_name
    createdAt
    updatedAt
    rentals{
      id
      date_begin
      date_end
      car{
        id
        plate_number
      }
    }
    bookings{
      id
      date_begin
      date_end
      montant_avance
      car{
        id
        plate_number
      }
    }
  }
}
`
export const get_customer_to_update = gql`
query get_customer_to_update($customerId:ID!){
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

export const delete_customer = gql`
  mutation delete_customer($id: ID!)  {
    deleteCustomer(id:$id){
        statut_code
        message
    }
  }

`

export default () => {
return "Show page working ! ";
}
