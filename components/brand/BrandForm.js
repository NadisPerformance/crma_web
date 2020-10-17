import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
class BrandForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      brand:{
        name:""
      }
    }
  }
  componentDidMount(){
    const {brand} = this.props
    if(brand){
      this.state.brand = brand
    }
    this.onChange()
  }
  setName(value){
    this.state.brand.name = value
    this.setState({brand:this.state.brand})
    this.onChange();
  }

  onChange(){
    if(this.props.onChange)
      this.props.onChange(this.state.brand)
  }
  render () {
    const {brand, show_password} = this.state
    return (
       <Form onSubmit={(event)=>{
                if(this.props.onSubmit)
                  this.props.onSubmit(event)
              }} >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nom:</Form.Label>
            <Form.Control value={brand.name} type="text" onChange={(event)=>this.setName(event.target.value)} placeholder="Nom de la marque" />
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

export default BrandForm;
