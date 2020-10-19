import React from 'react'
import { delete_image} from './queries'
import {  Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import { withRouter } from 'next/router'
import Router from 'next/router'

class DeleteButton extends React.Component {
  constructor (props) {
    super(props)
    const { carId } = this.props.router.query
    this.state={
      carId: carId,
      car:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Véhicules",path:"/cars/"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('Le véhicule a bien été supprimée.', 'success')
    this.props.history.push("/cars/");
  }
  render() {
    let {imageId} = this.props
    return (
      <Mutation mutation={delete_image} variables={{id:imageId}} >
          {postMutation =>
            <a  style={{margin:3}}
              onClick={(event)=>{
                event.preventDefault();
                //console.log(user)
                postMutation().then((result)=>{
                  //this.props.history.goBack();
                  //console.log(result)
                  if (result.data.deleteImage.statut_code==1){
                      if(this.props.onDelete)
                      this.props.onDelete(imageId)
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

export default withData(withRouter(DeleteButton))
