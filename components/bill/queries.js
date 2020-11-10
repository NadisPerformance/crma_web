import gql from 'graphql-tag'

export const get_bills = gql`
query get_bills($where:BillWhereInput,$limit:Int!, $page:Int!){
  bills (where:$where, limit:$limit, page: $page){
    edges{
      node{
        id
        rentalId
        customerId
        bill_number
        bill_date
        customer{
          id
          firstname
          lastname
          gender
        }
        rental{
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
    pageInfo {
      count
      currentPage
    }
  }
}
`

export const get_bill = gql`
query bill($billId:ID!){
  bill(id:$billId){
    id
    rentalId
    customerId
    bill_number
    bill_date
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
    rental{
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
`

export const get_bill_to_update = gql`
query bill($billId:ID!){
  bill(id:$billId){
    id
    rentalId
    customerId
    bill_number
    bill_date
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
    rental{
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
`

export const update_bill = gql`
  mutation update_bill($id: ID!, $data:BillInput!)  {
    updateBill(id:$id,data:$data){
      id
      rentalId
      customerId
      bill_number
      bill_date
    }
  }

`
export const create_bill = gql`
  mutation update_bill($data:BillInput!)  {
    createBill(data:$data){
        id
    }
  }

`

export const delete_bill = gql`
  mutation delete_bill($id: ID!)  {
    deleteBill(id:$id){
        statut_code
        message
    }
  }

`

export default () => {
return "Show page working ! ";
}
