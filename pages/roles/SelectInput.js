import React from 'react'
import Select from 'react-select';
import {get_roles} from './queries'
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
      this.state.selectedId = selectedId
      this.onChange(selectedId)
    }
  }
  setSelectedId(value){
    this.setState({selectedId:value})
    this.onChange(value)
  }
  onChange(value){
    if(this.props.onChange)
      this.props.onChange(value)
  }
  render () {
    const {selectedId} = this.state
    return (
      <Query query={get_roles} pollInterval={3000} >
        {({ loading, error, data }) => {
          if (loading) return <div>Chargement en cours ...</div>
          if (error) {
            console.log(error)
            return <div>Error</div>
          }
          var options= [];
          //console.log(data.roles.edges)
          var defaultValue
          for(var i=0; i < data.roles.edges.length; i++){
            var role =  data.roles.edges[i].node
            options.push({value:role.id, label:role.title})
            if(role.id == selectedId)
              defaultValue={value:role.id, label:role.title}

          }
          if(!this.state.selectedId &&  data.roles.edges[0] )
            this.setSelectedId(data.roles.edges[0].node.id)
          //console.log(options)
          return (
            <Select
               className="basic-single"
               classNamePrefix="select"
               defaultValue={defaultValue}
               isSearchable={true}
               name="role"
               options={options}
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
