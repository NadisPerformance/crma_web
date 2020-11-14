import React from 'react'

class Card extends React.Component{
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="card">
          <div className="card-header" key={1} style={{backgroundColor:"white"}} >
            {this.props.header}
          </div>
          <div className="card-body table-responsive p-0" key={2} >
            {this.props.children}
          </div>
          {false &&
          <div className="card-footer clearfix" key={3}>
          </div>
          }
      </div>
    )
  }
}

export default Card ;
