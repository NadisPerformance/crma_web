import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'  
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'

class RentalForm extends React.Component{
  constructor (props) {
    super(props)  
    this.state = {
      rental:{
        carId:"",
        customerId:"",
        second_driverId:"",
        date_begin:"",
        date_end:""
      },
      show_password:false
    } 
  } 
  componentDidMount(){
    const {rental} = this.props 
    if(rental){ 
      this.state.rental = rental  
    }
    this.onChange()
  }
  setCarId(value){
    this.state.rental.carId = value*1
    this.setState({rental:this.state.rental})
    this.onChange(); 
  }
  
  setCustomerId(value){
    this.state.rental.customerId = value*1
    this.setState({rental:this.state.rental})
    this.onChange(); 
  } 
  setSecondDriverId(value){
    this.state.rental.second_driverId = value*1
    this.setState({rental:this.state.rental})
    this.onChange(); 
  } 
  setDateBegin(value){
    this.state.rental.date_begin = value
    this.setState({rental:this.state.rental})
    this.onChange(); 
  } 
   
  setDateEnd(value){
    this.state.rental.date_end = value
    this.setState({rental:this.state.rental})
    this.onChange(); 
  }

  onChange(){ 
    if(this.props.onChange)
      this.props.onChange(this.state.rental)
  }
  render () {  
    const {rental, show_password} = this.state 
    return (
       <Form onSubmit={(event)=>{
                if(this.props.onSubmit)
                  this.props.onSubmit(event)
              }} >  
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Client:</Form.Label>
            <Form.Control value={rental.customerId} type="text" onChange={(event)=>this.setCustomerId(event.target.value)} placeholder="Client" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Véhicule:</Form.Label>
            <Form.Control value={rental.carId} type="text" onChange={(event)=>this.setCarId(event.target.value)} placeholder="Véhicule" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Deuxiéme conducteur:</Form.Label>
            <Form.Control value={rental.second_driverId} type="text" onChange={(event)=>this.setSecondDriverId(event.target.value)} placeholder="Deuxiéme conducteur" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date de début:</Form.Label>
            <DatePicker 
              selected={moment(rental.date_begin).format("MM/DD/YYYY")}
              onChange={date => this.setDateBegin(date)}
              isClearable
              placeholderText="I have been cleared!"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date de fin:</Form.Label>
            <DatePicker
              selected={moment(rental.date_end).format("MM/DD/YYYY")}
              onChange={date => this.setDateEnd(date)}
              isClearable
              placeholderText="I have been cleared!"
            />
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

export default RentalForm; 
