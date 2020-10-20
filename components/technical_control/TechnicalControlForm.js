import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
class TechnicalControlForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      technical_control:{
        name:""
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
  setName(value){
    this.state.technical_control.name = value
    this.setState({technical_control:this.state.technical_control})
    this.onChange();
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
            <Form.Label>Nom:</Form.Label>
            <Form.Control value={technical_control.name} type="text" onChange={(event)=>this.setName(event.target.value)} placeholder="Nom de l'assurance" />
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
