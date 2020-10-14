import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'
import CustomerSelectInput  from '../customers/SelectInput'
import CarSelectInput  from '../cars/SelectInput'

class BookingForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      booking:{
        carId:"",
        customerId:"",
        date_begin:"",
        date_end:""
      },
      show_password:false
    }
  }
  componentDidMount(){
    const {booking} = this.props
    if(booking){
      this.state.booking = booking
    }
    this.onChange()
  }
  setCarId(value){
    this.state.booking.carId = value*1
    this.setState({booking:this.state.booking})
    this.onChange();
  }

  setCustomerId(value){
    this.state.booking.customerId = value*1
    this.setState({booking:this.state.booking})
    this.onChange();
  }
  setMontantAvance(value){
    this.state.booking.montant_avance = value*1
    this.setState({booking:this.state.booking})
    this.onChange();
  }
  setDateBegin(value){
    this.state.booking.date_begin = value
    this.setState({booking:this.state.booking})
    this.onChange();
  }

  setDateEnd(value){
    this.state.booking.date_end = value
    this.setState({booking:this.state.booking})
    this.onChange();
  }

  onChange(){
    if(this.props.onChange)
      this.props.onChange(this.state.booking)
  }
  render () {
    const {booking, show_password} = this.state
    return (
       <Form onSubmit={(event)=>{
                if(this.props.onSubmit)
                  this.props.onSubmit(event)
              }} >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Client:</Form.Label>
            <CustomerSelectInput  selectedId={booking.customerId}  onChange={(selectedId)=>this.setCustomerId(selectedId)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Véhicule:</Form.Label>
            <CarSelectInput  selectedId={booking.carId}  onChange={(selectedId)=>this.setCarId(selectedId)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Montant payé à l'avance:</Form.Label>
            <Form.Control value={booking.montant_avance} type="text" onChange={(event)=>this.setMontantAvance(event.target.value)} placeholder="Montant payé à l'avance" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date de début:</Form.Label><br/>
            <DatePicker
              selected={Date.parse(moment(booking.date_begin).toDate())}
              onChange={date => this.setDateBegin(date)}
              isClearable
              dateFormat="d/MM/yyyy"
              placeholderText="Date début"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date de fin:</Form.Label><br/>
            <DatePicker
              selected={Date.parse(moment(booking.date_end).toDate())}
              onChange={date => this.setDateEnd(date)}
              isClearable
              dateFormat="d/MM/yyyy"
              placeholderText="Date début"
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

export default BookingForm;
