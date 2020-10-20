import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_before_rental_to_update, update_before_rental} from '../../components/before_rental/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import BeforeRentalForm from '../../components/before_rental/BeforeRentalForm'
import Router from 'next/router'

class Edit extends React.Component {
  constructor (props) {
    super(props)
    const { beforeRentalId } = this.props.router.query
    this.state={
      beforeRentalId: beforeRentalId,
      before_rental:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Locations",path:"/rentals/list"}]
  }
  header(){
    const { carId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Véhicule #"+carId}</h3>

                <div className="card-tools">
                    <Link href={"/cars/edit/"+carId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouveau" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {beforeRentalId, before_rental} = this.state
    var album= null
    return (
      <AdminLayout>
        <Page title="Véhicules" fariane={this.fariane}>
            <Query query={get_before_rental_to_update} variables={{beforeRentalId}} _pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.before_rental)
                  return "before_rental not found"
                console.log(data.before_rental)
                if(this.state.before_rental == null){
                    delete data.before_rental.__typename
                    before_rental = this.state.before_rental = data.before_rental
                    album = before_rental.album
                }
                delete this.state.before_rental.album
                delete this.state.before_rental.id
                //console.log(user)
                return (
                    <Mutation mutation={update_before_rental} variables={{id:beforeRentalId,data:this.state.before_rental}} >
                      {postMutation =>
                      <BeforeRentalForm
                        before_rental={data.before_rental}
                        album={ album}
                        onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(user)

                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            //console.log(result)
                            alert('Le début de location a bien été modifié.', 'success')
                            Router.push("/rentals/view?rentalId="+result.data.updateBeforeRental.rentalId);
                          })
                        }}
                        onChange={(before_rental)=>this.setState({before_rental:before_rental})}
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
