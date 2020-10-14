import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap' 
import moment from 'moment'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


class CustomerForm extends React.Component{
  constructor (props) {
    super(props)  
    this.state = {
      customer:{
        name:""
        
      }
    } 
  } 
  componentDidMount(){
    const {customer} = this.props 
    if(customer){ 
      this.state.customer = customer  
    }
    this.onChange()
  }
  setFirstname(value){
    this.state.customer.firstname = value
    this.setState({customer:this.state.customer})
    this.onChange(); 
  } 
  setLastname(value){
    this.state.customer.lastname = value
    this.setState({customer:this.state.customer})
    this.onChange(); 
  } 
  setBirthday(value){
    this.state.customer.birthday = value
    this.setState({customer:this.state.customer})
    this.onChange(); 
  } 
  setGender(value){
    this.state.customer.gender = value
    this.setState({customer:this.state.customer})
    this.onChange(); 
  } 
  setCNI(value){
    this.state.customer.cni = value
    this.setState({customer:this.state.customer})
    this.onChange(); 
  } 
  setType(value){
    this.state.customer.type = value
    this.setState({customer:this.state.customer})
    this.onChange(); 
  } 
  setDriver_license(value){
    this.state.customer.driver_license = value
    this.setState({customer:this.state.customer})
    this.onChange(); 
  } 
  setCity(value){
    this.state.customer.city = value
    this.setState({customer:this.state.customer})
    this.onChange(); 
  } 
  setAddress(value){
    this.state.customer.address = value
    this.setState({customer:this.state.customer})
    this.onChange(); 
  } 
  setEmail(value){
    this.state.customer.email = value
    this.setState({customer:this.state.customer})
    this.onChange(); 
  } 
  setPhone(value){
    this.state.customer.phone = value
    this.setState({customer:this.state.customer})
    this.onChange(); 
  } 
  setCompany_name(value){
    this.state.customer.company_name = value
    this.setState({customer:this.state.customer})
    this.onChange(); 
  } 
  
  onChange(){ 
    if(this.props.onChange)
      this.props.onChange(this.state.customer)
  }
  render () {  
    const {customer, show_password} = this.state 
    return (
       <Form onSubmit={(event)=>{
          if(this.props.onSubmit)
            this.props.onSubmit(event)
          }} >  
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Type:</Form.Label>
            <Form.Control value={customer.type} onChange={(event)=>this.setType(event.target.value)} as="select">
              <option value="0">Particulier</option>
              <option value="1">Société</option>
            </Form.Control>
          </Form.Group>
          { customer.type ==true &&
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Société:</Form.Label>
              <Form.Control value={customer.company_name} type="text" onChange={(event)=>this.setCompany_name(event.target.value)} placeholder="Société" />
            </Form.Group>
          }
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nom:</Form.Label>
            <Form.Control value={customer.lastname} type="text" onChange={(event)=>this.setLastname(event.target.value)} placeholder="Nom " />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Prenom:</Form.Label>
            <Form.Control value={customer.firstname} type="text" onChange={(event)=>this.setFirstname(event.target.value)} placeholder="Prenom " />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date de naissance:</Form.Label><br/>
            <DatePicker
              selected={Date.parse(moment(customer.birthday).toDate())}
              onChange={date => this.setBirthday(date)}
              isClearable
              dateFormat="d/MM/yyyy"
              placeholderText="Date de naissance"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Civilité:</Form.Label>
            <Form.Control value={customer.gender} onChange={(event)=>this.setGender(event.target.value)} as="select">
              <option>Mr</option>
              <option>Mme</option>
              <option>Mlle</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>CNI:</Form.Label>
            <Form.Control value={customer.cni} type="text" onChange={(event)=>this.setCNI(event.target.value)} placeholder="CNI " />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Permis de conduite:</Form.Label>
            <Form.Control value={customer.driver_license} type="text" onChange={(event)=>this.setDriver_license(event.target.value)} placeholder="Permis de conduite " />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Ville:</Form.Label>
            <Form.Control value={customer.city} type="text" onChange={(event)=>this.setCity(event.target.value)} placeholder="Ville " />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Adresse:</Form.Label>
            <Form.Control value={customer.address} type="text" onChange={(event)=>this.setAddress(event.target.value)} placeholder="Adresse " />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control value={customer.email} type="text" onChange={(event)=>this.setEmail(event.target.value)} placeholder="E-mail " />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Téléphone:</Form.Label>
            <Form.Control value={customer.phone} type="text" onChange={(event)=>this.setPhone(event.target.value)} placeholder="Téléphone " />
          </Form.Group>
          <div className="text-right" style={{margin:10}}>
                <Button   variant="primary" type="submit">
                  Enregistrer
                </Button>
          </div> 
       </Form>
    )
  }
}

const styles ={
  btnXs:{
    padding: ".25rem .4rem",
    fontSize: ".875rem",
    lineHeight: 0.5,
    borderRadius: ".2rem"
  }
}

export default CustomerForm; 
