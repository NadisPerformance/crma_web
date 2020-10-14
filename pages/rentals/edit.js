import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_rental, update_rental} from './queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import RentalForm from './RentalForm'
import Router from 'next/router'

class Edit extends React.Component {
  constructor (props) {
    super(props)
    const { rentalId } = this.props.router.query
    this.state={
        rentalId: rentalId,
        rental:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Rental",path:"/rentals/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'utilisateur a bien été supprimée.', 'success')
    this.props.history.push("/rentals/");
  }
  header(){
    const { rentalId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Location #"+rentalId}</h3>

                <div className="card-tools">
                    <Link href={"/rentals/edit/"+rentalId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {rentalId, rental} = this.state
    if(rental)
      delete rental.id
    return (
      <AdminLayout>
        <Page title="Locations" fariane={this.fariane}>
            <Query query={get_rental} variables={{rentalId}} _pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.rental)
                  return "Rental not found"
                if(this.state.rental == null){
                    delete data.rental.__typename
                    rental = this.state.rental = data.rental
                }
                rental.customerId = this.state.rental.customerId * 1
                rental.carId = this.state.rental.carId * 1
                rental.second_driverId = this.state.rental.second_driverId *  1
                delete rental.customer
                delete rental.car
                //console.log(user)
                return (
                    <Mutation mutation={update_rental} variables={{id:rentalId,data:rental}} >
                      {postMutation =>
                      <RentalForm
                        rental={rental}
                          onSubmit={(event)=>{
                            //alert("hello")
                            event.preventDefault();
                            //console.log(user)
                            postMutation().then((result)=>{
                              //this.props.history.goBack();
                              //console.log(result)
                              alert('La location a bien été modifié.', 'success')
                              Router.push("/rentals/view?rentalId="+result.data.updateRental.id);
                            })
                          }
                        }
                        onChange={(rental)=>this.setState({rental:rental})}
                      />
                      }
                    </Mutation>
                )
              }}
              </Query>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(Edit))
