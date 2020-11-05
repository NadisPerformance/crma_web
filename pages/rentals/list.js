import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_rentals} from '../../components/rental/queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import withAuth from '../../lib/withAuth'
import RentalDeleteButton from '../../components/rental/DeleteButton'
import Pagination from '../../components/Pagination'
import moment from 'moment'
import SearchForm from '../../components/rental/SearchForm'
import { withRouter } from 'next/router'


class List extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      limit:10,
      page:1
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Locations",path:"/rental/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  renderHeader(){

  }
  header(){
    console.log(this.props.rental)
    return (<React.Fragment>
             <h3 className="card-title">Locations</h3>
              <div className="card-tools">
                    <Link href="/rentals/add" >
                      <a className="btn btn-success btn-xs" >
                        <i className="fa fa-plus"></i> Nouvelle location
                      </a>
                    </Link>
                </div>
          </React.Fragment>)
  }
  onDelete(){
    window.flash('La location a bien été supprimée.', 'success')
    //this.props.history.push("/cars/");
  }
  render() {
    const {
      limit, page
    } = this.state
    const { customerId, carId } = this.props.router.query
    var where = {}
    if( customerId && customerId != 0)
      where.customerId = {equals:customerId *1}
    if( carId  && carId != 0)
      where.carId = {equals:carId* 1}
    return (
      <AdminLayout>
        <Page title="Locations" fariane={this.fariane}>
          <SearchForm />
          <Card header={this.header()} >
          <Query query={get_rentals} variables={{limit:limit,page:page,where:where}} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                if( data.rentals.edges.length == 0)
                  return (<p><center> Aucun réservation trouvé.</center></p>)
                return (
                  <React.Fragment>
                     <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>#ID</th>
                          <th>Date de début</th>
                          <th>Date de fin</th>
                          <th>Client</th>
                          <th>Véhicule</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.rentals.edges.map((edge, index)=>{
                            let rental = edge.node
                            return (
                              <tr key={rental.id}>
                                <td>{rental.id}</td>
                                <td>{moment(rental.date_begin).format("DD/MM/YYYY")}</td>
                                <td>{moment(rental.date_end).format("DD/MM/YYYY")} </td>
                                <td> {rental.customer && rental.customer.gender + " "+rental.customer.lastname+" "+rental.customer.firstname}</td>
                                <td>{rental.car.plate_number}</td>
                                <td>
                                  <Link href={"/rentals/view?rentalId="+rental.id} >
                                    <a style={{margin:3}}
                                    className="btn btn-info btn-sm" >
                                    <i className="fa fa-eye"></i>
                                    </a>
                                  </Link>
                                  <Link href={"/rentals/edit?rentalId="+rental.id} >
                                    <a  style={{margin:3}}
                                    className="btn btn-success btn-sm" >
                                    <i className="fa fa-pen-alt"></i>
                                    </a>
                                  </Link>
                                  <RentalDeleteButton rentalId={rental.id} />
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                    <Pagination
                      currentPage={data.rentals.pageInfo.currentPage}
                      count={data.rentals.pageInfo.count}
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
