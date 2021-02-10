import axios from "axios"

const itinerariesActions = {
    getItineraries: (id) => {
        return async (dispatch, getState) => {
            const res = await fetch('http://localhost:4000/api/itineraries/' + id)
            const data = await res.json()
            dispatch({type: 'CHARGE_ITINERARIES', payload: data.itinerary})
        }
    },
    addComment:(content, id, userName, userPic) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/comments/', {content, id, userName, userPic})
            console.log(res.config.data)
            dispatch({type: 'ADD_COMMENT', payload: res.config.data})
        }
    },
    deleteComment: (id, idcomment) => {
        return async(dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/comments/delete', {id, idcomment})
            dispatch({type: 'DELETE_COMMENT', payload: res.config.data})
        }
    }
}

export default itinerariesActions