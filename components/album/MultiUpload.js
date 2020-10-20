import React, { Component } from 'react';
import { Query, Mutation , useMutation} from 'react-apollo'
import {create_album} from './queries'
import {create_image} from '../image/queries'
import ImageDeleteButton from '../image/DeleteButton'
export default class MultiUpload extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null],
            albumId:null,
            isLoading: false,
            album:{
              title:"Test"
            },
            image:{
              albumId:null,
              file: null
            },
            uploaded_images:[]
        }
        if(props.album)
         this.state.uploaded_images = props.album.images
        this.uploadFile = this.uploadFile.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }
    componentDidMount(){
      //const [createAlbum, { data }] = useMutation(createAlbum);
      //createAlbum({ variables: { data:this.state.album } });
      const {album} = this.props
      if(album && album.id)
        this.setAlbumId(album.id)
      if(album != null ){
         this.state.uploaded_images = album.images
      }
      console.log(album)

    }
    async uploadFile(file) {
        this.setState({isLoading: true})
        if(!file )
          return null
        this.setImageFile(file)
        console.log(file)
        if(  !this.state.albumId )
          await this.createAlbum().then((result)=>{
            this.setAlbumId(result.data.createAlbum.id)
          })
        this.uploadImage().then((result)=>{
          this.state.uploaded_images.push(result.data.createImage)
          this.setState({uploaded_images:this.state.uploaded_images})
          this.setState({isLoading: false})
          //alert("Image uploaded "+result.data.createImage.id)
        })
        this.fileObj.push(file)
        this.fileArray.push(URL.createObjectURL(file))
      //  console.log(this.fileObj)
        //this.setState({ file: this.fileArray })


    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }
    setAlbumId(value){
      this.state.image.albumId =  value * 1
      this.state.albumId = value * 1
      this.setState({image:this.state.image})
      this.setState({albumId:value *1})
      this.onChange()
    }
    async createAlbum(){

    }
    setImageFile(file){
       this.state.image.file = file
       console.log(file)
       this.setState({image:this.state.image})
    }
    deleteImage(imageId){
      var images = this.state.uploaded_images
      for(var i= 0; i < images.length; i++)
        if( images[i] && images[i].id == imageId)
          delete images[i]
      this.setState({uploaded_images:images})
    }
    onChange(){
      if(this.props.onChange)
        this.props.onChange(this.state.albumId)
    }
    render() {
        const {album, albumId} = this.state
        return (
          <Mutation mutation={create_album} variables={{data:this.state.album}} >
            {postMutation => {
             this.createAlbum = postMutation
             return (<React.Fragment>
               {(this.state.uploaded_images || []).map(image => (
                <div className="col-sm-12 row" style={{backgroundColor:'white',padding:'2px',margin:'2px'}}>
                    <div className="col-sm-4" >
                        <img src={image.image_url} alt="..." width="100px" />
                    </div>
                    <div className="col-sm-4" >
                    </div>
                    <div className="col-sm-4" style={{padding: '30px'}} >
                      <ImageDeleteButton imageId={image.id} onDelete={(imageId)=>this.deleteImage(imageId)} />
                    </div>
                </div>
               ))}
               { this.state.isLoading &&
                 <div className="col-sm-12 row" style={{border:"solid #ccc 1px", backgroundColor:'white',padding:'2px',margin:'2px'}}>
                     <center>Chargement en cours ...</center>
                 </div>
               }
                <div className="form-group">
                    <input type="file" className="form-control" id="file"
                    onChange={({target: {validity,files: [file],},})=>this.uploadFile(file)}
                      style={{display:'none'}}/>
                </div>
                <Mutation mutation={create_image} variables={{data:this.state.image}} >
                  {postMutation =>{
                    this.uploadImage = postMutation
                    return (
                      <button type="button" className="btn btn-danger btn-block" onClick={()=>document.getElementById('file').click()}>Charger des photos</button>
                    )
                  } }
                </Mutation>
            </React.Fragment >
          )}
          }
        </Mutation>
        )
    }
}
