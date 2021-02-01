import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { Card, CardTitle, Input} from 'reactstrap'

const Itinerary = (props) => {
  const [seeMore, setSeemore] = useState(false)
        return (   
          <div className="d-flex justify-content-center" key={props.itinerary._id}>
            <div className={props.index % 2 === 0 ? 'itinerary-r bg-primary':'itinerary-l bg-primary'}>
              <div>
                <div className="d-flex">
                  <div className="m-4 itinerary">
                    <img src={props.itinerary.pic} alt="..." className="w-25"/>
                    <h3 className="text-light m-1">{props.itinerary.name}</h3>
                  </div>
                  <div className="d-block">
                      <h2 className="">{props.itinerary.title}</h2>
                      <div className="d-flex">
                        <h4 className="m-4 text-light text-center">Likes {props.itinerary.like}</h4>
                        <h4 className="m-4 text-light text-center">{props.itinerary.hours} hours</h4>
                        <div style={{display:'flex', alignItems:'center',width:'50%'}}>Price:{[...Array(props.itinerary.price)].map((m,i)=>{
                            return ( <img src="https://image.flaticon.com/icons/png/512/2057/2057398.png" width="40" key={i} alt=""/>
                            )})}
                        </div>

                    </div>
                    <div className="d-flex flex-wrap">
                      {props.itinerary.hashtag.map((hashtag, index) => <h5 key={index} className="m-2 text-info"> {hashtag} </h5>)}
                    </div>
                  </div>
                </div>{seeMore ? (
                  <>
                  <div className="d-flex">
                    <div className={props.index % 2 === 0 ? 'activites-img-r w-50':'activites-img-l w-50'} >
                      {props.itinerary.activities.map((activity, index) => {
                        return (
                          <>
                          <div className="d-flex justify-content-start">
                              <Card inverse className={props.index % 2 === 0 ? 'activities-r':'activities-l'} style={{backgroundImage: `url(${activity.actImage}`}}>
                                <div className="d-flex align-items-center">
                                  <CardTitle tag="h3" className="text-primary titulo-act">{activity.actTitle}</CardTitle>
                                </div>
                              </Card>
                          </div>
                          </>
                          )
                          })}
                    </div>
                    <div className="w-50">
                      <h3 className="text-center">Comments</h3>
                      {props.itinerary.comments.map(comment => {
                        return (
                          <>
                          <div className="d-flex">
                            <img src={comment.userPic} className="w-25" alt="..."/>
                            <div>
                              <h6 className="index">{comment.userName}</h6>
                              <p className="bg-light rounded w-75">{comment.content}</p>
                            </div>
                          </div>
                          </>
                        )
                      })}
                      <Input type="email" name="email" id="exampleEmail" placeholder="Please login" disabled style={{width : "300px", heigth : "1px"}} />
                    </div>
                  </div>
                  </>):
                  " "
                  }
                <div className="text-center w-100">
                  <Link className="text-warning backcities" to="#" onClick={() => {setSeemore(!seeMore)}}><i className="fas fa-arrow-alt-circle-down d-flex justify-content-center"></i>View Activities</Link>
                </div>
              </div>
            </div>
          </div>
          )
}

const mapStateToProps = state => {
  return {
      listItineraries: state.itineraryR.itineraries

  }
}


export default connect(mapStateToProps)(Itinerary)