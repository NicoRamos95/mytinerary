/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Jumbotron, Container } from 'reactstrap';
import { Link } from "react-router-dom";
import  Itinerary  from './Itinerary';
import { connect } from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions';

const City = (props) => {
  const [city, setCity] = useState({})

  useEffect( () => {
    window.scroll(0, 0)
    const {id} = props.match.params
    const City = props.cities.filter(city => city._id === id)
    setCity(City[0])
    props.allItineraries(id)
  }, [])

  return (
    <div>
      <div className="d-flex justify-content-center aling-items-center m-5">
      <Link className="text-center backcities" to="/cities" key={city._id}><i className="fas fa-arrow-circle-left d-flex justify-content-center"></i>Go Back to Cities</Link>
        <Jumbotron fluid className='image-r' style={{backgroundImage: `url(../assets/${city.cityPic})`}}>
          <Container fluid>
            <h1 className="display-3 text-center text-light">{city.cityName}</h1>
          </Container> 
        </Jumbotron>
      </div>
      { props.itineraries.length !== 0 ? props.itineraries.map((itinerary, index) => <Itinerary itinerary={itinerary} index={index}/>)
      :
      <div className="not-found bg-primary m-5">
        <h2>Not itineraries</h2>
      </div>}
    </div>
  )
  
}

const mapStateToProps = state => {
  return {
      cities: state.cityR.cities,
      itineraries: state.itineraryR.itineraries
  }
}
const mapDispatchToProps = {
  allItineraries: itinerariesActions.getItineraries
}


export default connect(mapStateToProps, mapDispatchToProps)(City) 