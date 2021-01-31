const itinerariesActions = {
    getItineraries: (id) => {
        return async (dispatch, getState) => {
            const res = await fetch('http://localhost:4000/api/itineraries/' + id)
            const data = await res.json()
            dispatch({type: 'CHARGE_ITINERARIES', payload: data.itinerary})
        }
    }
}

export default itinerariesActions