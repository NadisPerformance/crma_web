import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_rentals} from './queries'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import {Table} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import withAuth from '../../lib/withAuth'

class List extends React.Component {
  constructor (props) {
    super(props)
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
                        <i className="fa fa-plus"></i> Nouvelle locations
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
    return (
      <AdminLayout>
        <Page title="Locations" fariane={this.fariane}>
          <Card header={this.header()} >
            <Query query={get_rental} pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                return (
                     <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>#ID</th>
                          <th>Marque</th>
                          <th>Model</th>
                          <th>Catégorie</th>
                          <th>Prix journal</th>
                          <th>Couleur</th>
                          <th>Immatriculation</th>
                          <th>Chassis number</th>
                          <th>Status</th>
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
                                <td>{rental.brand.name}</td>
                                <td>{rental.model_date} {car.model}</td>
                                <td>{rental.category.categoryId}</td>
                                <td>{car.price}</td>
                                <td>{rental.color.colorId}</td>
                                <td>{rental.plate_number}</td>
                                <td>{rental.chassis_number}</td>
                                <td>{rental.status.statusId}</td>
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
