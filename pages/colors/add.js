import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_color} from '../../components/color/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import ColorForm from '../../components/color/ColorForm'
import { withFlashMessages } from 'next-flash-messages'

class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      car:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Couleurs",path:"/colors/list"},{title:"Nouvelle couleur",path:"/colors/add"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La couleur a bien été supprimée.', 'success')
    this.props.history.push("/colors/");
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Nouvelle couleur "}</h3>

                <div className="card-tools">
                    <Link href={"/colors/add"} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Nouvelle
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {color} = this.state
    return (
      <AdminLayout>
        <Page title="Couleurs" fariane={this.fariane}>
            <Mutation mutation={create_color} variables={{data:this.state.color}} >
              {postMutation =>
                 <ColorForm
                 color={color}
                    onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(car)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            this.props.flashMessages.set('La couleur a bien été crée.', 'success')
                            Router.push("/colors/view?colorId="+result.data.createColor.id);
                          })
                        }}
                        onChange={(color)=>this.setState({color:color})}
                         />
              }
          </Mutation>
        </Page>
      </AdminLayout>
    )
  }
}

export default withFlashMessages(withData(withRouter(Add)))
