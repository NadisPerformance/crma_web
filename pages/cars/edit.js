import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_car, update_car} from './queries'
import { Query, Mutation } from 'react-apollo' 
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card' 
import { withRouter } from 'next/router'
import CarForm from './CarForm'
import Router from 'next/router'

class Edit extends React.Component {
  constructor (props) {
    super(props)   
    const { carId } = this.props.router.query
    this.state={
      carId: carId,
      car:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Véhicules",path:"/cars/"}]  
    this.onDelete = this.onDelete.bind(this)
  } 
  onDelete(){
    window.flash('Le véhicule a bien été supprimé.', 'success')
    this.props.history.push("/cars/");
  }
  header(){ 
    const { carId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Utilisateur #"+carId}</h3>

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
    let {carId, car} = this.state
    if(car){
      delete car.id
      delete car.brand
    }
    return (
      <AdminLayout>
        <Page title="Vehicules" fariane={this.fariane}>
            <Query query={get_car} variables={{carId}} _pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div> 
                }   
                console.log(data) 
                if(!data.car)
                  return "Car not found"
                if(this.state.car == null){
                    delete data.car.__typename
                    car = this.state.car = data.car 
                }
                delete this.state.car.brand
                delete this.state.car.color
                delete this.state.car.category
                //console.log(user)
                return (  
                    <Mutation mutation={update_car} variables={{id:carId,data:this.state.car}} >
                      {postMutation => 
                      <CarForm 
                      car={car}
                        onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault(); 
                          //console.log(user)

                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            //console.log(result)
                            alert('Le véhicule a bien été modifié.', 'success')
                            Router.push("/cars/view?carId="+result.data.updateCar.id);
                          })
                        }} 
                        onChange={(car)=>this.setState({car:car})}
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