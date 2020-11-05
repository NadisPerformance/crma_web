import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'
import Router from 'next/router'

class SearchForm extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      category:{
        title:"",
      }
    }
  }
  setTitle(value){
    this.state.category.title = value
    this.setState({category:this.state.category})
  }
  render () {
    const {
      category
    } = this.state
    return(
        <div class="card col-12">
              <Form  onSubmit={(event)=>{
                  event.preventDefault();
                  Router.push("/categories/list?title="+category.title);
              }}>
               <div class="card-body">
                <div className="row">
                <div className="col-3">
                  <Form.Group controlId="formBasicName">
                    <Form.Control value={category.title} type="text" onChange={(event)=>this.setTitle(event.target.value)} placeholder="Nom ..." />
                  </Form.Group>
                 </div>
                 <div className="col-3"></div>
                 <div className="col-3"></div>
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
