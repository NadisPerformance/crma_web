import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_technical_control_to_update, update_technical_control} from '../../components/technical_control/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import TechnicalControlForm from '../../components/technical_control/TechnicalControlForm'
import Router from 'next/router'

class Edit extends React.Component {
  constructor (props) {
    super(props)
    const { technical_controlId } = this.props.router.query
    this.state={
      technical_controlId: technical_controlId,
      technical_control:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Contrôle technique",path:"/technical_controls/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('Le contrôle technique a bien été supprimée.', 'success')
    this.props.history.push("/technical_controls/");
  }
  header(){
    const { technical_controlId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Location #"+technical_controlId}</h3>

                <div className="card-tools">
                    <Link href={"/technical_controls/edit/"+technical_controlId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {technical_controlId, technical_control} = this.state
    if(technical_control)
      delete technical_control.id
    return (
      <AdminLayout>
        <Page title="Contrôles techniques" fariane={this.fariane}>
            <Query query={get_technical_control_to_update} variables={{technical_controlId}} _pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.technical_control)
                  return "technical_control not found"
                if(this.state.technical_control == null){
                    delete data.technical_control.__typename
                    technical_control = this.state.technical_control = data.technical_control
                }
                //console.log(user)
                return (
                    <Mutation mutation={update_technical_control} variables={{id:technical_controlId,data:technical_control}} >
                      {postMutation =>
                      <TechnicalControlForm
                      technical_control={technical_control}
                          onSubmit={(event)=>{
                            //alert("hello")
                            event.preventDefault();
                            //console.log(user)
                            postMutation().then((result)=>{
                              //this.props.history.goBack();
                              //console.log(result)
                              alert('Le contrôle technique a bien été modifié.', 'success')
                              Router.push("/technical_controls/view?technical_controlId="+result.data.updateTechnicalControl.id);
                            })
                          }
                        }
                        onChange={(technical_control)=>this.setState({technical_control:technical_control})}
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
