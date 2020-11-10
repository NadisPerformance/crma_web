import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_bills} from '../../components/bill/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import withAuth from '../../lib/withAuth'
import BillDeleteButton from '../../components/bill/DeleteButton'
import moment from 'moment'
import Pagination from '../../components/Pagination'
import SearchForm from '../../components/bill/SearchForm'
import { withRouter } from 'next/router'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      limit:10,
      page:1
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Factures",path:"/bills/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  renderHeader(){

  }
  header(){
    console.log(this.props.bill)
    return (<React.Fragment>
             <h3 className="card-title">Factures</h3>
              <div className="card-tools">
                    <Link href="/bills/add" >
                      <a className="btn btn-success btn-xs" >
                        <i className="fa fa-plus"></i> Nouvelle facture
                      </a>
                    </Link>
                </div>
          </React.Fragment>)
  }
  onDelete(){
    window.flash('La facture a bien été supprimée.', 'success')
    //this.props.history.push("/cars/");
  }
  render() {
    const {
      limit, page
    } = this.state
    const { customerId, rentalId } = this.props.router.query
    var where = {}
    if( customerId && customerId != 0)
      where.customerId = {equals:customerId *1}
    if( rentalId  && rentalId != 0)
      where.rentalId = {equals:rentalId* 1}
    return (
      <AdminLayout>
        <Page title="Réservations" fariane={this.fariane}>
        <SearchForm />
          <Card header={this.header()} >
            <Query query={get_bills} variables={{limit:limit,page:page,where:where}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                if( data.bills.edges.length == 0)
                  return (<p><center> Aucun facture trouvé.</center></p>)
                return (
                  <React.Fragment>
                     <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>#ID</th>
                          <th>Numéro de facture</th>
                          <th>Client</th>
                          <th>Date de facture</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.bills.edges.map((edge, index)=>{
                            let bill = edge.node
                            return (
                              <tr key={bill.id}>
                                <td>{bill.id}</td>
                                <td>{bill.bill_number}</td>
                                <td> {bill.customer.gender} {bill.customer.lastname} {bill.customer.firstname}</td>
                                <td>{moment(bill.bill_date).format("DD/MM/YYYY")} </td>
                                <td>
                                  <Link href={"/bills/view?billId="+bill.id} >
                                    <a style={{margin:3}}
                                    className="btn btn-info btn-sm" >
                                    <i className="fa fa-eye"></i>
                                    </a>
                                  </Link>
                                  <Link href={"/bills/edit?billId="+bill.id} >
                                    <a  style={{margin:3}}
                                    className="btn btn-success btn-sm" >
                                    <i className="fa fa-pen-alt"></i>
                                    </a>
                                  </Link>
                                  <BillDeleteButton billId={bill.id} />
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                    <Pagination
                    currentPage={data.bills.pageInfo.currentPage}
                    count={data.bills.pageInfo.count}
                    perPage={this.state.limit}
                    onChange={(page)=>this.setState({page:page})}
                    />
                </React.Fragment>
                )
              }}
              </Query>
          </Card>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(List), true)
