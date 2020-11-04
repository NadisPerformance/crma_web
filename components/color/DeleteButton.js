import React from 'react'
import { delete_color} from './queries'
import {  Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import { withRouter } from 'next/router'
import Router from 'next/router'
import { withFlashMessages } from 'next-flash-messages'


class DeleteButton extends React.Component {
  constructor (props) {
    super(props)
    const { colorId } = this.props.router.query
    this.state={
      colorId: colorId,
      color:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Véhicules",path:"/colors/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('La couleur a bien été supprimée.', 'success')
    this.props.history.push("/colors/");
  }
  render() {
    let {colorId} = this.props
    return (
      <Mutation mutation={delete_color} variables={{id:colorId}} >
          {postMutation =>
            <a  style={{margin:3}}
              onClick={(event)=>{
                event.preventDefault();
                //console.log(user)
                postMutation().then((result)=>{
                  //this.props.history.goBack();
                  //console.log(result)
                  if (result.data.deleteColor.statut_code==1){
                      this.props.flashMessages.set('La couleur a bien été supprimée.', 'success')
                      Router.push("/colors/list");
                  }
                })
              }}
                  className="btn btn-danger btn-sm" >
                  <i className="fa fa-trash" style={{color:'white'}}></i>
             </a>
          }
      </Mutation>

    )
  }
}

export default withFlashMessages(withData(withRouter(DeleteButton)))
