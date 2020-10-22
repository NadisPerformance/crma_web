import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_car_insurance} from '../../components/car_insurance/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import CarInsuranceForm from '../../components/car_insurance/CarInsuranceForm'
class Add extends React.Component {
  constructor (props) {
    super(props)
    const { carId } = this.props.router.query
    this.state={
      car_insurance:{
        carId: carId*1,
        date_begin:"",
        date_end:""
      }
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Contrôle technique",path:"/car_insurances/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('Le contrôle technique a bien été supprimée.', 'success')
    this.props.history.push("/insurances/");
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Nouveau contrôle technique "}</h3>

                <div className="card-tools">
                    <Link href={"/car_insurances/add"} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Nouvelle
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {car_insurance} = this.state
    return (
      <AdminLayout>
        <Page title="Assurances" fariane={this.fariane}>
          <Mutation mutation={create_car_insurance} variables={{data:this.state.car_insurance}} >
            {postMutation =>
              <CarInsuranceForm
              car_insurance={car_insurance}
                onSubmit={(event)=>{
                  alert("hello")
                  event.preventDefault();
                  //console.log(car)
                  postMutation().then((result)=>{
                    //this.props.history.goBack();
                    alert('L\'assurance a bien été crée.', 'success')
                    Router.push("/cars/view?carId="+result.data.createTechnicalControl.carId);
                  })
                }}
                onChange={(car_insurance)=>this.setState({car_insurance:car_insurance})}
              />
            }
          </Mutation>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(Add))
