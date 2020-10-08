import React from 'react'
import Link from "next/link";
class Page extends React.Component{
  constructor (props) {
    super(props)  
  }
  render () {
    return ( 
       <section className="content">
        <div className="container-fluid"> 
          <div className="content-header">  
            { (this.props.fariane || this.props.title) &&
            <div className="row mb-2" key={2}>
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">{this.props.title}</h1>
              </div>
              {this.props.fariane &&
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  { this.props.fariane.map((item)=>{ 
                    return <li key={item.path} className={"almz" == item.path?"breadcrumb-item active":"breadcrumb-item"}>
                              { "emklkmlz" != item.path &&
                                <Link href={item.path} >
                                   <a>{item.title}</a>
                                </Link>
                              }
                              { "this.props.location.pathname" == item.path &&
                                   item.title
                              }
                            </li>
                   }, this) 
                  }
                </ol>
              </div>
              }
            </div>
          }
          </div> 
        <div className="row">
          <div className="col-12">
            {this.props.children}
          </div>
        </div>
      </div> 
      </section>
    )
  }
}

export default Page;
