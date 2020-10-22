import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_car_insurance_to_update, update_car_insurance} from '../../components/car_insurance/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import TechnicalControlForm from '../../components/car_insurance/TechnicalControlForm'
import Router from 'next/router'

class Edit extends React.Component {
  constructor (props) {
    super(props)
    const { car_insuranceId } = this.props.router.query
    this.state={
      car_insuranceId: car_insuranceId,
      car_insurance:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Contrôle technique",path:"/car_insurances/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('Le contrôle technique a bien été supprimée.', 'success')
    this.props.history.push("/car_insurances/");
  }
  header(){
    const { car_insuranceId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Location #"+car_insuranceId}</h3>

                <div className="card-tools">
                    <Link href={"/car_insurances/edit/"+car_insuranceId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {car_insuranceId, car_insurance} = this.state
    if(car_insurance)
      delete car_insurance.id
    return (
      <AdminLayout>
        <Page title="Contrôles techniques" fariane={this.fariane}>
            <Query query={get_car_insurance_to_update} variables={{car_insuranceId}} _pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.car_insurance)
                  return "car insurance not found"
                if(this.state.car_insurance == null){
                    delete data.car_insurance.__typename
                    car_insurance = this.state.car_insurance = data.car_insurance
                }
                //console.log(user)
                return (
                    <Mutation mutation={update_car_insurance} variables={{id:car_insuranceId,data:car_insurance}} >
                      {postMutation =>
                      <TechnicalControlForm
                      car_insurance={car_insurance}
                          onSubmit={(event)=>{
                            //alert("hello")
                            event.preventDefault();
                            //console.log(user)
                            postMutation().then((result)=>{
                              //this.props.history.goBack();
                              //console.log(result)
                              alert('Le contrôle technique a bien été modifié.', 'success')
                              Router.push("/car_insurances/view?car_insuranceId="+result.data.updateCarInsurance.id);
                            })
                          }
                        }
                        onChange={(car_insurance)=>this.setState({car_insurance:car_insurance})}
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
