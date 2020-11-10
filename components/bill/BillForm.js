import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'
import CustomerSelectInput  from '../customer/SelectInput'
import RentalSelectInput  from '../rental/SelectInput'

class BillForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      bill:{
        rentalId:"",
        customerId:"",
        bill_number:"",
        bill_date:"",
      },
      show_password:false
    }
  }
  componentDidMount(){
    const {bill} = this.props
    if(bill){
      this.state.bill = bill
    }
    this.onChange()
  }
  setRentalId(value){
    this.state.bill.rentalId = value*1
    this.setState({bill:this.state.bill})
    this.onChange();
  }

  setCustomerId(value){
    this.state.bill.customerId = value*1
    this.setState({bill:this.state.bill})
    this.onChange();
  }
  setBillNumber(value){
    this.state.bill.bill_number = value*1
    this.setState({bill:this.state.bill})
    this.onChange();
  }
  setBillDate(value){
    this.state.bill.bill_date = value
    this.setState({bill:this.state.bill})
    this.onChange();
  }

  

  onChange(){
    if(this.props.onChange)
      this.props.onChange(this.state.bill)
  }
  render () {
    const {bill, show_password} = this.state
    return (
       <Form onSubmit={(event)=>{
                if(this.props.onSubmit)
                  this.props.onSubmit(event)
              }} >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Numero de facture:</Form.Label>
            <Form.Control value={bill.bill_number} type="text" onChange={(event)=>this.setMontantAvance(event.target.value)} placeholder="Montant payé à l'avance" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Client:</Form.Label>
            <CustomerSelectInput  selectedId={bill.customerId}  onChange={(selectedId)=>this.setCustomerId(selectedId)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>location:</Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date de facture:</Form.Label><br/>
            <DatePicker
              selected={Date.parse(moment(bill.bill_date).toDate())}
              onChange={date => this.setBillDate(date)}
              isClearable
              dateFormat="d/MM/yyyy"
              placeholderText="Date début"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date de fin:</Form.Label><br/>
            <DatePicker
              selected={Date.parse(moment(bill.date_end).toDate())}
              onChange={date => this.setDateEnd(date)}
              isClearable
              dateFormat="d/MM/yyyy"
              placeholderText="Date début"
            />
          </Form.Group>
          <Form.Group>
              <Form.Label>Commentaire</Form.Label><br/>
            <Form.Control as="text"  value={bill.comment} onChange={(event)=>this.setComment(event.target.value)} placeholder="Commentaire" />
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
