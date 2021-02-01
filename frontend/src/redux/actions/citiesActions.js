const citiesActions = {
    getCities: () => {
        return async (dispatch, getState) => {
            const res = await fetch('http://localhost:4000/api/cities')
            const data = await res.json()
            dispatch({type: 'CHARGE_CITIES', payload: data.respuesta})
        }
    },
    searchCities: (value) => {
        return async (dispatch, getState) => {
            dispatch({type: 'SEARCH_CITIES', payload: value})
        }
    },
    getCityId: (id) => {
        return async (dispatch, getState) => {
            const res = await fetch('http://localhost:4000/api/cities/' + id)
            const data = await res.json()
            dispatch({type: 'CITY_ID', payload: data.respuesta})
        }
    }
}

export default citiesActions