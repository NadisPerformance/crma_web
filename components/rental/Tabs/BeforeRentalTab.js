import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'

import { withRouter } from 'next/router'
import Link from 'next/link'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
class BeforeRentalTab extends React.Component {
  constructor (props) {
    super(props)
  }
  renderAlbum(album){
    var images = []
    for(var i=0; i<album.images.length; i++){
       images.push(album.images[i].image_url)
    }
    return (
      <AwesomeSlider bullets={true}>
        {images.map((image, key) => <div data-src={image} />)}
      </AwesomeSlider>
    )

  }
  render() {
    let {before_rental, rentalId} = this.props
    return (
        <Row className="col-sm-12">
                {!before_rental &&
                <Col className="col-sm-6 table-responsive">
                  <div style={{padding:'20px'}}>
                  <Link href={"/before_rentals/add?rentalId="+rentalId} >
                     <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                      <i className="fa fa-pen-alt"></i> Marquer le début de location
                      </a>
                  </Link>
                  </div>
                </Col>
               }
               {before_rental &&
                <React.Fragment>
                <Col className="col-sm-6 table-responsive">
                <div style={{textAlign:'right'}} >
                <Link href={"/before_rentals/edit?beforeRentalId="+before_rental.id} >
                   <a className="btn btn-success btn-sm" data-toggle="tooltip" title="" data-original-title="Nouvelle" >
                    <i className="fa fa-pen-alt"></i> Modifier
                    </a>
                </Link>
                </div>
                <table className="table">
                    <tbody>
                        <tr>
                          <th style={{width:"50%"}} >Niveau de carburant:</th>
                          <td>{before_rental.niveau_carburant}</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Kilométrage:</th>
                            <td>{before_rental.kilometrage} Kms</td>
                        </tr>
                        <tr>
                            <th style={{width:"50%"}} >Commentaire:</th>
                            <td>{before_rental.comment}</td>
                        </tr>

                    </tbody>
                </table>
                </Col>
                <Col className="col-sm-6 table-responsive">
                    {this.renderAlbum(before_rental.album)}
                </Col>
                </React.Fragment>
              }

        </Row>
    )
  }
}

export default withRouter(BeforeRentalTab)
