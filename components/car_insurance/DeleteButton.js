import React from 'react'
import { delete_car_insurance } from './queries'
import {  Mutation } from 'react-apollo'
import withData from '../../lib/withData'
import { withRouter } from 'next/router'
import Router from 'next/router'

class DeleteButton extends React.Component {
  constructor (props) {
    super(props)
    const { car_insuranceId } = this.props.router.query
    this.state={
      car_insuranceId: car_insuranceId,
      car_insurance:null
    }
    this.fariane= [{title:"Acceuil",path:"/"},{title:"Assurances",path:"/car_insurances/list"}]
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(){
    window.flash('L\'assurance a bien été supprimé pour ce véhicule.', 'success')
    this.props.history.push("/car_insurances/");
  }
  render() {
    let {car_insuranceId} = this.props
    return (
      <Mutation mutation={delete_car_insurance} variables={{id:car_insuranceId}} >
          {postMutation =>
            <a  style={{margin:3}}
              onClick={(event)=>{
                //alert("hello")
                event.preventDefault();
                //console.log(user)
                postMutation().then((result)=>{
                  //this.props.history.goBack();
                  //console.log(result)
                  if (result.data.deleteCarInsurance.statut_code==1){
                      alert('L\'assurance a bien été supprimé pour ce véhicule.', 'success')
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
