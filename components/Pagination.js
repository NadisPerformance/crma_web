import React from 'react'

class Pagination extends React.Component{
  constructor (props) {
    super(props)
  }
  setPage(page){
    if(this.props.onChange)
      this.props.onChange(page)
  }
  getPagination(){
     const { currentPage, count, perPage} = this.props
     if(!count)
        return null
     var pagination= "" ;
     //if( parseInt(count/perPage) == 0 )
      //return null
     return [...Array(parseInt(count/perPage))].map((x, i)=>{
       if(i+1 == currentPage)
          return <li class="page-item active">
              <a href="#" class="page-link"
            onClick={()=>this.setPage(i+1)}>{i+1}
              </a>
              </li>
       else
         return <li class="page-item">
              <a href="#" class="page-link"
              onClick={()=>this.setPage(i+1)}  >{i+1}
              </a>
              </li>
     }
    )
  }
  getPreview(){
    const { currentPage} = this.props
    if(currentPage == 1)
      return <li class="page-item disabled"><a href="#" class="page-link">«</a></li>
    return <li class="page-item"><a href="#" class="page-link" onClick={()=>this.setPage(currentPage-1)}>«</a></li>
  }
  getNext(){
    const { currentPage, count, perPage} = this.props
    if(currentPage >= parseInt(count/perPage)   )
      return <li class="page-item disabled"><a href="#" class="page-link">»</a></li>
    return <li class="page-item"><a href="#" class="page-link" onClick={()=>this.setPage(currentPage+1)}>»</a></li>
  }
  render () {
      return (
        <div style={{margin:"10px", float:"right"}} >
         <center>
          <ul class="pagination pagination-sm">
                    {this.getPreview()}
                    {this.getPagination()}
                    {this.getNext()}
                  </ul>
          </center>
        </div>
        )
  }
}
export default Pagination
