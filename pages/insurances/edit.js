import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_insurance_to_update, update_insurance} from '../../components/insurance/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import InsuranceForm from '../../components/insurance/InsuranceForm'
import Router from 'next/router'
import { withFlashMessages } from 'next-flash-messages'

class Edit extends React.Component {
  constructor (props) {
    super(props)
    const { insuranceId } = this.props.router.query
    this.state={
      insuranceId: insuranceId,
      insurance:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Assurances",path:"/insurances/list"},{title:"Assurance #"+insuranceId,path:"/insurances/view?insuranceId="+insuranceId},{title:"Modifier assurance",path:"/insurances/edit?insuranceId="+insuranceId}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'assurance a bien été supprimée.', 'success')
    this.props.history.push("/insurances/");
  }
  header(){
    const { insuranceId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Location #"+insuranceId}</h3>

                <div className="card-tools">
                    <Link href={"/insurances/edit/"+insuranceId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {insuranceId, insurance} = this.state
    if(insurance)
      delete insurance.id
    return (
      <AdminLayout>
        <Page title="Assurances" fariane={this.fariane}>
            <Query query={get_insurance_to_update} variables={{insuranceId}} _pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.insurance)
                  return "Rental not found"
                if(this.state.insurance == null){
                    delete data.insurance.__typename
                    insurance = this.state.insurance = data.insurance
                }
                //console.log(user)
                return (
                    <Mutation mutation={update_insurance} variables={{id:insuranceId,data:insurance}} >
                      {postMutation =>
                      <InsuranceForm
                      insurance={insurance}
                          onSubmit={(event)=>{
                            //alert("hello")
                            event.preventDefault();
                            //console.log(user)
                            postMutation().then((result)=>{
                              //this.props.history.goBack();
                              //console.log(result)
                              this.props.flashMessages.set('L\'assurance a bien été modifiée.', 'success')
                              Router.push("/insurances/view?insuranceId="+result.data.updateInsurance.id);
                            })
                          }
                        }
                        onChange={(insurance)=>this.setState({insurance:insurance})}
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

export default withFlashMessages(withData(withRouter(Edit)))
