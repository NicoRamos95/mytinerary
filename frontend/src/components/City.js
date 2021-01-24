import React, { useEffect, useState } from 'react'
import { Jumbotron, Container } from 'reactstrap';
import { Link } from "react-router-dom";
import MyLoader from './Loader';

export const City = (props) => {
  const [city, setCity] = useState({})
  const [loader, setLoad] = useState(true)
  const [itineraries, setItinerary] = useState(false)
  console.log(loader)
  const loading = () => {
    if (loader) {
      return(
        <MyLoader/>
      )
  }
  }
  useEffect( () => {
    const id = props.match.params.id
    fetch('http://localhost:4000/api/cities/' + id)
    .then(response => response.json())
    .then(data => {setCity(data.respuesta); setLoad(false); setItinerary(true)})
    console.log(city)
  }, [])
  return (
    <>
    <div className="d-flex justify-content-center aling-items-center m-5">
    <Link className="text-center backcities" to="/cities"><i className="fas fa-arrow-circle-left d-flex justify-content-center"></i>Go to Back Cities</Link>
      <Jumbotron fluid className='image-r' style={{backgroundImage: `url(../assets/${city.cityPic})`}}>
        <Container fluid>
          {loading()}
          <h1 className="display-3 text-center text-light">{city.cityName}</h1>
        </Container> 
      </Jumbotron>
    </div>
    {itineraries? 
        <div className="d-flex justify-content-center">
          <div className="not-found bg-primary text-light">
            <h1>Not itineraries yet</h1>
          </div>
        </div>: ""
        }
    </>
  )
}