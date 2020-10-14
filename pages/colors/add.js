import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_color} from './queries'
import { Query, Mutation } from 'react-apollo' 
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card' 
import { withRouter } from 'next/router'
import ColorForm from './ColorForm'
class Add extends React.Component {
  constructor (props) {
    super(props)   
    this.state={ 
      color:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Couleurs",path:"/colors/"}]  
    this.onDelete = this.onDelete.bind(this)
  } 
  onDelete(){
    window.flash('L\'utilisateur a bien été supprimée.', 'success')
    this.props.history.push("/colorss/");
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
    let {color} = this.state
    return (
      <AdminLayout>
        <Page title="Véhicules" fariane={this.fariane}>
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
                            alert('Le véhicule a bien été crée.', 'success')
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

export default withData(withRouter(Add))