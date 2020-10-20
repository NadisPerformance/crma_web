import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_after_rental_to_update, update_after_rental} from '../../components/after_rental/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import AfterRentalForm from '../../components/after_rental/AfterRentalForm'
import Router from 'next/router'

class Edit extends React.Component {
  constructor (props) {
    super(props)
    const { afterRentalId } = this.props.router.query
    this.state={
      afterRentalId: afterRentalId,
      after_rental:null
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
    let {afterRentalId, after_rental} = this.state
    var album= null
    return (
      <AdminLayout>
        <Page title="Véhicules" fariane={this.fariane}>
            <Query query={get_after_rental_to_update} variables={{afterRentalId}} _pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.after_rental)
                  return "after_rental not found"
                console.log(data.after_rental)
                if(this.state.after_rental == null){
                    delete data.after_rental.__typename
                    after_rental = this.state.after_rental = data.after_rental
                    album = after_rental.album
                }
                delete this.state.after_rental.album
                delete this.state.after_rental.id
                //console.log(user)
                return (
                    <Mutation mutation={update_after_rental} variables={{id:afterRentalId,data:this.state.after_rental}} >
                      {postMutation =>
                      <AfterRentalForm
                        after_rental={data.after_rental}
                        album={ album}
                        onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(user)

                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            //console.log(result)
                            alert('Le début de location a bien été modifié.', 'success')
                            Router.push("/rentals/view?rentalId="+result.data.updateAfterRental.rentalId);
                          })
                        }}
                        onChange={(after_rental)=>this.setState({after_rental:after_rental})}
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
