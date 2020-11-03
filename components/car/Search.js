import React from 'react'
import {Form, Row,Col, Button, InputGroup} from 'react-bootstrap'

class Search extends React.Component{
  constructor (props) {
    super(props)
  }
  render () {
      return (
            <div style={{margin:"10px", float:"left"}} >
                <Form.Group controlId="search">
                    <Form.Control type="text"  placeholder="Rechercher" />
                </Form.Group>
            </div>
        )
  }
}
export default Search
