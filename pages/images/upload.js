import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { create_image} from '../../components/image/queries'
import { Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col, Button} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      image:{
        albumId:1,
        file:null
      }
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Véhicules",path:"/cars/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'image a bien été supprimée.', 'success')
    this.props.history.push("/cars/");
  }
  header(){
    return <React.Fragment>
             <h3 className="card-title">{"Nouvelle image"}</h3>

                <div className="card-tools">
                    <Link href={"/images/add"} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Nouvelle
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  setFile(file){
     this.state.image.file = file
     console.log(file)
     this.setState({image:this.state.image})
  }
  render() {
    let {car} = this.state
    return (
      <AdminLayout>
        <Page title="Images" fariane={this.fariane}>
            <Mutation mutation={create_image} variables={{data:this.state.image}} >
              {postMutation =>
                <React.Fragment>
                 <input type="file"
                        onChange={({target: {validity,files: [file],},})=>this.setFile(file)}
                    />
                    <div className="text-right" style={{margin:10}}>
                          <Button   variant="primary" type="submit"
                          onClick={()=>{
                                alert("hello")
                                event.preventDefault();
                                //console.log(car)
                                postMutation().then((result)=>{
                                  //this.props.history.goBack();
                                  alert('L\'image a bien été crée.', 'success')
                                  //Router.push("/cars/view?carId="+result.data.createCar.id);
                                })
                              }}>
                            Enregistrer
                          </Button>
                    </div>
                </React.Fragment>
              }
          </Mutation>
        </Page>
      </AdminLayout>
    )
  }
}

export default withData(withRouter(Add))
