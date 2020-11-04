import React from 'react';

class Flash extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      show:true
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        show: false
      });
    }, 6000);
  }
  hide(){
    this.setState({show:false})
  }
  render () {
    const {type, message} = this.props
    if(!this.state.show)
      return null
    return (
        <div className={`alert alert-${type}`}>
                  <a onClick={()=>this.hide()} >
                    <span className="close"><i class="fas fa-times"></i>
                    </span>
                  </a>
                  <p>{`${message}`}</p>
        </div>
    )
  }
}

export default Flash ;
