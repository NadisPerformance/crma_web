import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'

import Router from 'next/router'

class SearchForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      customer:{
        firstname:"",
        lastname:"",
        cni:"",
        driver_license:"",
        email:"",
        phone:""
      }
    }
  }
  setFirstname(value){
    this.state.customer.firstname = value
    this.setState({customer:this.state.customer})
  }
  setLastname(value){
    this.state.customer.lastname = value
    this.setState({customer:this.state.customer})
  }
  setCNI(value){
    this.state.customer.cni = value
    this.setState({customer:this.state.customer})
  }
  setDriver_license(value){
    this.state.customer.driver_license = value
    this.setState({customer:this.state.customer})
  }
  setEmail(value){
    this.state.customer.email = value
    this.setState({customer:this.state.customer})
  }
  setPhone(value){
    this.state.customer.phone = value
    this.setState({customer:this.state.customer})
  }
  render () {
    const {
      customer
    } = this.state
    return(
        <div class="card col-12">
              <Form  onSubmit={(event)=>{
                  event.preventDefault();
                  Router.push("/customers/list?firstname="+customer.firstname+"&lastname="+customer.lastname+"&cni="+customer.cni+"&driver_license="+customer.driver_license+"&phone="+customer.phone+"&email="+customer.email);
              }}>
               <div class="card-body">
                <div className="row">
                <div className="col-3">
                  <Form.Group controlId="formBasicFirstname">
                    <Form.Control value={customer.firstname} type="text" onChange={(event)=>this.setFirstname(event.target.value)} placeholder="Prénom ..." />
                  </Form.Group>
                  <Form.Group controlId="formBasicLastname">
                    <Form.Control value={customer.lastname} type="text" onChange={(event)=>this.setLastname(event.target.value)} placeholder="Nom ..." />
                  </Form.Group>
                 </div>
                 <div className="col-3">
                  <Form.Group controlId="formBasicCNI">
                    <Form.Control value={customer.cni} type="text" onChange={(event)=>this.setCNI(event.target.value)} placeholder="CNI ..." />
                  </Form.Group>
                  <Form.Group controlId="formBasicDriver_license">
                    <Form.Control value={customer.driver_license} type="text" onChange={(event)=>this.setDriver_license(event.target.value)} placeholder="Permit de conduite ..." />
                  </Form.Group>
                 </div>
                 <div className="col-3">
                  <Form.Group controlId="formBasicPhone">
                    <Form.Control value={customer.phone} type="text" onChange={(event)=>this.setPhone(event.target.value)} placeholder="Numéro de téléphone ..." />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control value={customer.email} type="text" onChange={(event)=>this.setEmail(event.target.value)} placeholder="E-mail ..." />
                  </Form.Group>
                 </div>
                 <div className="col-3">
                 <button type="submit" class="btn btn-primary  float-right">Rechercher</button>

                 </div>

              </div>
              </div>
              </Form>
          </div>
    )
  }
}

export default SearchForm
