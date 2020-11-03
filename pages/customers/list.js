import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_customers} from '../../components/customer/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import withAuth from '../../lib/withAuth'
import CustomerDeleteButton from '../../components/customer/DeleteButton'
import Pagination from '../../components/Pagination'
import Search from '../../components/customer/Search'
class List extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      limit:10,
      page:1
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Clients",path:"#"}]
    this.onDelete = this.onDelete.bind(this)
  }
  renderHeader(){

  }
  header(){
    console.log(this.props.customer)
    return (<React.Fragment>
             <h3 className="card-title">Clients</h3>
              <div className="card-tools">
                    <Link href="/customers/add" >
                      <a className="btn btn-success btn-xs" >
                        <i className="fa fa-plus"></i> Nouveau client
                      </a>
                    </Link>
                </div>
          </React.Fragment>)
  }
  onDelete(){
    window.flash('Le client a bien été supprimé.', 'success')
    //this.props.history.push("/users/");
  }
  render() {
    const {
      limit, page
    } = this.state
    return (
      <AdminLayout>
        <Page title="Clients" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_customers} variables={{limit:limit,page:page}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                return (
                  <React.Fragment>
                    <Search />
                     <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>#ID</th>
                          <th>Nom complet</th>
                          <th>CNI</th>
                          <th>Permit de conduite</th>
                          <th>Adresse</th>
                          <th>Téléphone</th>
                          <th>E-mail</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.customers.edges.map((edge, index)=>{
                            let customer = edge.node
                            return (
                              <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.gender} {customer.firstname} {customer.lastname}</td>
                                <td>{customer.cni}</td>
                                <td>{customer.driver_license}</td>
                                <td>{customer.address}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.email}</td>
                                <td>
                                  <Link href={"/customers/view?customerId="+customer.id} >
                                    <a style={{margin:3}}
                                    className="btn btn-info btn-sm" >
                                    <i className="fa fa-eye"></i>
                                    </a>
                                  </Link>
                                  <Link href={"/customers/edit?customerId="+customer.id} >
                                    <a  style={{margin:3}}
                                    className="btn btn-success btn-sm" >
                                    <i className="fa fa-pen-alt"></i>
                                    </a>
                                  </Link>
                                  <CustomerDeleteButton customerId={customer.id} />
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                    <Pagination
                      currentPage={data.customers.pageInfo.currentPage}
                      count={data.customers.pageInfo.count}
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

export default withData(List, true)
