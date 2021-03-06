import React from 'react'
import Select from 'react-select';
import {get_customers} from './queries'
import { Query } from 'react-apollo'
class SelectInput extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      selectedId:0
    }
    this.setSelectedId = this.setSelectedId.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount(){
    const {selectedId} = this.props
    if(selectedId){
      this.setState({selectedId:selectedId})
      this.onChange(selectedId)
    }
  }
  setSelectedId(value){
    this.setState({selectedId:value*1})
    this.onChange(value)
  }
  onChange(value){
    if(this.props.onChange)
      this.props.onChange(value*1)
  }
  render () {
    var {selectedId} = this.state
    if(!selectedId)
       selectedId = this.props.selectedId
    return (
      <Query query={get_customers} variables={{limit:100,page:1}} pollInterval={3000} >
        {({ loading, error, data }) => {
          if (loading) return <div>Chargement en cours ...</div>
          if (error) {
            console.log(error)
            return <div>Error</div>
          }
          var options= [];
          //console.log(data.roles.edges)
          let defaultValue, defaultLabel
          //if(!this.state.selectedId &&  data.customers.edges[0] )
            //this.setSelectedId(data.customers.edges[0].node.id)
          for(var i=0; i < data.customers.edges.length; i++){
            var customer =  data.customers.edges[i].node
            options.push({value:customer.id, label:customer.lastname+' '+customer.firstname })
            if(customer.id == selectedId)
              defaultLabel = customer.lastname+' '+customer.firstname

          }
          if( selectedId != 0 && defaultLabel)
            defaultValue = {value:selectedId,label: defaultLabel}
          //console.log(options)
          console.log(defaultValue)
          return (
            <Select
               className="basic-single"
               classNamePrefix="select"
               defaultValue={defaultValue}
               isSearchable={true}
               name="customer"
               options={options}
               placeholder="Choisir le client"
               onChange={({value})=>this.setSelectedId(value)}
             />
          )
        }}
        </Query>
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

export default SelectInput;
