import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_car} from '../../components/car/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import CarForm from '../../components/car/CarForm'
class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      car:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Véhicules",path:"/cars/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'utilisateur a bien été supprimée.', 'success')
    this.props.history.push("/cars/");
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Nouveau véhicule "}</h3>

                <div className="card-tools">
                    <Link href={"/cars/add"} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Nouveau
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {car} = this.state
    return (
      <AdminLayout>
        <Page title="Véhicules" fariane={this.fariane}>
            <Mutation mutation={create_car} variables={{data:this.state.car}} >
              {postMutation =>
                 <CarForm
                    car={car}
                    onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(car)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            alert('Le véhicule a bien été crée.', 'success')
                            Router.push("/cars/view?carId="+result.data.createCar.id);
                          })
                        }}
                        onChange={(car)=>this.setState({car:car})}
                         />
              }
          </Mutation>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(Add))
