import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_bill} from '../../components/bill/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import BillForm from '../../components/bill/BillForm'
import { withFlashMessages } from 'next-flash-messages'
class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      car:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Factures",path:"/bills/list"},{title:"Nouvelle facture",path:"/bills/add"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La facture a bien été supprimée.', 'success')
    this.props.history.push("/bills/");
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Nouvelle facture "}</h3>

                <div className="card-tools">
                    <Link href={"/bills/add"} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Nouvelle
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {bill} = this.state
    return (
      <AdminLayout>
        <Page title="Nouvelle facture" fariane={this.fariane}>
            <Mutation mutation={create_bill} variables={{data:this.state.bill}} >
              {postMutation =>
                 <BillForm
                 bill={bill}
                    onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(car)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            this.props.flashMessages.set('La facture a bien été crée.', 'success')
                            Router.push("/bills/view?billId="+result.data.createBill.id);
                          })
                        }}
                        onChange={(bill)=>this.setState({bill:bill})}
                         />
              }
          </Mutation>
        </Page>
      </AdminLayout>
    )
  }
}

export default withFlashMessages(withData(withRouter(Add)))
