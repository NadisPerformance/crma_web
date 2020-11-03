import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {get_color, update_color} from '../../components/color/queries'
import { Query, Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import {Table, Row,Col} from 'react-bootstrap'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { withRouter } from 'next/router'
import ColorForm from '../../components/color/ColorForm'
import Router from 'next/router'

class Edit extends React.Component {
  constructor (props) {
    super(props)
    const { colorId } = this.props.router.query
    this.state={
        colorId: colorId,
        color:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Couleurs",path:"/colors/list"},{title:"Couleur #"+colorId,path:"/colors/view?colorId="+colorId},{title:"Modifier couleur",path:"/colors/edit?colorId="+colorId}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La couleur a bien été supprimée.', 'success')
    this.props.history.push("/colors/");
  }
  header(){
    const { colorId } = this.state
    return <React.Fragment>
             <h3 className="card-title">{"Couleurs #"+colorId}</h3>

                <div className="card-tools">
                    <Link href={"/colors/edit/"+colorId} >
                       <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                        <i className="fa fa-pen-alt"></i> Modifier
                        </a>
                    </Link>
                </div>
          </React.Fragment>
  }
  render() {
    let {colorId, color} = this.state
    if(color)
      delete color.id
    return (
      <AdminLayout>
        <Page title="Couleurs" fariane={this.fariane}>
            <Query query={get_color} variables={{colorId}} _pollInterval={3000} >
              {({ loading, error, data }) => {
                if (loading) return <div>Chargement en cours ...</div>
                if (error) {
                  console.log(error)
                  return <div>Error</div>
                }
                console.log(data)
                if(!data.color)
                  return "Color not found"
                if(this.state.color == null){
                    delete data.color.__typename
                    color = this.state.color = data.color
                }
                //console.log(user)
                return (
                    <Mutation mutation={update_color} variables={{id:colorId,data:this.state.color}} >
                      {postMutation =>
                      <ColorForm
                        color={color}
                        onSubmit={(event)=>{
                          //alert("hello")
                          event.preventDefault();
                          //console.log(user)
                          postMutation().then((result)=>{
                            //this.props.history.goBack();
                            //console.log(result)
                            alert('La couleur a bien été modifié.', 'success')
                            Router.push("/colors/view?colorId="+result.data.updateColor.id);
                          })
                        }}
                        onChange={(color)=>this.setState({color:color})}
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
