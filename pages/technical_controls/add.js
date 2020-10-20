import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_technical_control} from '../../components/technical_control/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import TechnicalControlsForm from '../../components/technical_controls/TechnicalControlsForm'
class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      car:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Assurance",path:"/insurances/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'assurance a bien été supprimée.', 'success')
    this.props.history.push("/insurances/");
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Nouvelle assurance "}</h3>

                <div className="card-tools">
                    <Link href={"/insurances/add"} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Nouvelle
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {insurance} = this.state
    return (
      <AdminLayout>
        <Page title="Assurances" fariane={this.fariane}>
          <Mutation mutation={create_technical_control} variables={{data:this.state.technical_control}} >
            {postMutation =>
              <TechnicalControlsForm
              technical_control={technical_control}
                onSubmit={(event)=>{
                  //alert("hello")
                  event.preventDefault();
                  //console.log(car)
                  postMutation().then((result)=>{
                    //this.props.history.goBack();
                    alert('L\'assurance a bien été crée.', 'success')
                    Router.push("/technical_controls/view?technical_controlId="+result.data.createTechnicalControl.id);
                  })
                }}
                onChange={(technical_control)=>this.setState({technical_control:technical_control})}
              />
            }
          </Mutation>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(Add))
