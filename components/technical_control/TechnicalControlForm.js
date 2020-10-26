import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'
class TechnicalControlForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      technical_control:{
        carId:0,
        date_begin:"",
        date_end:""
      }
    }
  }
  componentDidMount(){
    const {technical_control} = this.props
    if(technical_control){
      this.state.technical_control = technical_control
    }
    this.onChange()
  }
  setCarId(value){
    this.state.technical_control.carId = value*1
    this.setState({technical_control:this.state.technical_control})
    this.onChange();
  }

  setDateBegin(value){
    this.state.technical_control.date_begin = value
    this.setState({technical_control:this.state.technical_control})
    this.onChange();
  }

  setDateEnd(value){
    this.state.technical_control.date_end = value
    this.setState({technical_control:this.state.technical_control})
    this.onChange();
  }

  setTechnicalControlFile(file){
    this.state.technical_control.technical_control_file = file
    this.setState({technical_control:this.state.technical_control})
    this.onChange() ;
 }

  onChange(){
    if(this.props.onChange)
      this.props.onChange(this.state.technical_control)
  }
  render () {
    const {technical_control, show_password} = this.state
    return (
       <Form onSubmit={(event)=>{
                if(this.props.onSubmit)
                  this.props.onSubmit(event)
              }} >
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Contrôle technique scannée:</Form.Label>
              <Form.Control type="file"
                onChange={({target: {validity,files: [file],},})=>this.setTechnicalControlFile(file)}
                 />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="hidden" value={technical_control.carId}  onChange={(event)=>this.setCarId(event.target.value)} placeholder="Nom de l'assurance" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date de début:</Form.Label><br/>
            <DatePicker
              selected={Date.parse(moment(technical_control.date_begin).toDate())}
              onChange={date => this.setDateBegin(date)}
              isClearable
              dateFormat="dd/MM/yyyy"
              placeholderText="Date début"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date de fin:</Form.Label><br/>
            <DatePicker
              selected={Date.parse(moment(technical_control.date_end).toDate())}
              onChange={date => this.setDateEnd(date)}
              isClearable
              dateFormat="dd/MM/yyyy"
              placeholderText="Date fin"
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

export default TechnicalControlForm;
