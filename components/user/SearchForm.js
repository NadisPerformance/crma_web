import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import RoleSelectInput  from '../role/SelectInput'
import Router from 'next/router'

class SearchForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      user:{
        firstname:"",
        lastname:"",
        cni:"",
        email:"",
        phone:"",
        roleId:1
      }
    }
  }
  setFirstname(value){
    this.state.user.firstname = value
    this.setState({user:this.state.user})
  }
  setLastname(value){
    this.state.user.lastname = value
    this.setState({user:this.state.user})
  }
  setCNI(value){
    this.state.user.cni = value
    this.setState({user:this.state.user})
  }
  setRoleId(value){
    this.state.user.roleId = value
    this.setState({user:this.state.user})
  }
  setEmail(value){
    this.state.user.email = value
    this.setState({user:this.state.user})
  }
  setPhone(value){
    this.state.user.phone = value
    this.setState({user:this.state.user})
  }
  render () {
    const {
      user
    } = this.state
    return(
        <div class="card col-12">
              <Form  onSubmit={(event)=>{
                  event.preventDefault();
                  Router.push("/users/list?roleId="+user.roleId+"&firstname="+user.firstname+"&lastname="+user.lastname+"&cni="+user.cni+"&phone="+user.phone+"&email="+user.email);
              }}>
               <div class="card-body">
                <div className="row">
                <div className="col-3">
                  <Form.Group controlId="formBasicDriver_license">
                    <RoleSelectInput  selectedId={user.roleId}  onChange={(selectedId)=>this.setRoleId(selectedId)} />
                  </Form.Group>
                  <Form.Group controlId="formBasicFirstname">
                    <Form.Control value={user.firstname} type="text" onChange={(event)=>this.setFirstname(event.target.value)} placeholder="Prénom ..." />
                  </Form.Group>
                 </div>
                 <div className="col-3">
                  <Form.Group controlId="formBasicLastname">
                    <Form.Control value={user.lastname} type="text" onChange={(event)=>this.setLastname(event.target.value)} placeholder="Nom ..." />
                  </Form.Group>
                  <Form.Group controlId="formBasicCNI">
                    <Form.Control value={user.cni} type="text" onChange={(event)=>this.setCNI(event.target.value)} placeholder="CNI ..." />
                  </Form.Group>
                 </div>
                 <div className="col-3">
                  <Form.Group controlId="formBasicPhone">
                    <Form.Control value={user.phone} type="text" onChange={(event)=>this.setPhone(event.target.value)} placeholder="Numéro de téléphone ..." />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control value={user.email} type="text" onChange={(event)=>this.setEmail(event.target.value)} placeholder="E-mail ..." />
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
