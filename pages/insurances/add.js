import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_insurance} from '../../components/insurance/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import InsuranceForm from '../../components/insurance/InsuranceForm'
class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      car:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Assurance",path:"/insurances/list"},{title:"Nouvelle assurance",path:"/insurances/add"}]
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
            <Mutation mutation={create_insurance} variables={{data:this.state.insurance}} >
              {postMutation =>
                 <InsuranceForm
                 insurance={insurance}
                    onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(car)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            alert('L\'assurance a bien été crée.', 'success')
                            Router.push("/insurances/view?insuranceId="+result.data.createInsurance.id);
                          })
                        }}
                        onChange={(insurance)=>this.setState({insurance:insurance})}
                         />
              }
          </Mutation>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(Add))
