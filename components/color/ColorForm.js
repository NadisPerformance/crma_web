import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
class ColorForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      color:{
        name:""
      }
    }
  }
  componentDidMount(){
    const {color} = this.props
    if(color){
      this.state.color = color
    }
    this.onChange()
  }
  setName(value){
    this.state.color.name = value
    this.setState({color:this.state.color})
    this.onChange();
  }

  onChange(){
    if(this.props.onChange)
      this.props.onChange(this.state.color)
  }
  render () {
    const {color, show_password} = this.state
    return (
       <Form onSubmit={(event)=>{
                if(this.props.onSubmit)
                  this.props.onSubmit(event)
              }} >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nom:</Form.Label>
            <Form.Control value={color.name} type="text" onChange={(event)=>this.setName(event.target.value)} placeholder="Nom de la marque" />
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

export default ColorForm;
