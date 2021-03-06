import React from 'react'
import Select from 'react-select';
import {get_brands} from './queries'
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
    this.setState({selectedId:value*1})
    this.onChange(value)
  }
  onChange(value){
    if(this.props.onChange)
      this.props.onChange(value*1)
  }
  render () {
    var  {selectedId} = this.state
    if(!selectedId)
      selectedId = this.props.selectedId
    return (
      <Query query={get_brands} variables={{limit:100,page:1}} pollInterval={3000} >
        {({ loading, error, data }) => {
          if (loading) return <div>Chargement en cours ...</div>
          if (error) {
            console.log(error)
            return <div>Error</div>
          }
          var options= [];
          //console.log(data.roles.edges)
          var defaultValue, defaultLabel
          for(var i=0; i < data.brands.edges.length; i++){
            var brand =  data.brands.edges[i].node
            options.push({value:brand.id, label:brand.name})
            if(brand.id == selectedId)
              defaultLabel = brand.name

          }
          if( selectedId != 0 && defaultLabel)
            defaultValue = {value:selectedId,label: defaultLabel}
          return (
            <Select
               className="basic-single"
               classNamePrefix="select"
               defaultValue={defaultValue}
               isSearchable={true}
               name="brand"
               options={options}
               placeholder="Choisir la marque"
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
