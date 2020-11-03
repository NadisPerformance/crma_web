import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
class CategoryForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      category:{
        name:""
      }
    }
  }
  componentDidMount(){
    const {category} = this.props
    if(category){
      this.state.category = category
    }
    this.onChange()
  }
  setTitle(value){
    this.state.category.title = value
    this.setState({category:this.state.category})
    this.onChange();
  }

  onChange(){
    if(this.props.onChange)
      this.props.onChange(this.state.category)
  }
  render () {
    const {category, show_password} = this.state
    return (
       <Form onSubmit={(event)=>{
                if(this.props.onSubmit)
                  this.props.onSubmit(event)
              }} >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nom:</Form.Label>
            <Form.Control value={category.title} type="text" onChange={(event)=>this.setTitle(event.target.value)} placeholder="Nom de la catégorie" />
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

export default CategoryForm;
