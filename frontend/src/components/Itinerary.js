import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'

const Itinerary = (props) => {
  useEffect(() => {
    props.allItineraries()
  }, [])

    return(
      props.listItineraries.map((itinerary, index) => {
        return (   
        <div className="d-flex justify-content-center">
        <div className={index % 2 === 0 ? 'itinerary-r bg-primary':'itinerary-l bg-primary'}>
          {console.log(itinerary)}
        </div>
      </div>
        )
      })
    )
}

const mapStateToProps = state => {
  return {
      listItineraries: state.itineraryR.itineraries

  }
}

const mapDispatchToProps = {
  allItineraries: itinerariesActions.getItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)