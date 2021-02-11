import axios from "axios"
import { Toast } from "reactstrap"

const itinerariesActions = {
    getItineraries: (id) => {
        return async (dispatch, getState) => {
            const res = await fetch('http://localhost:4000/api/itineraries/' + id)
            const data = await res.json()
            dispatch({type: 'CHARGE_ITINERARIES', payload: data.itinerary})
        }
    },
    addComment:(content, id, token) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post('http://localhost:4000/api/comments/', {content, id, token}, {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                })
                dispatch({type: 'ADD_COMMENT', payload: res.config.data})
                return true
            } catch(error){
                Toast.error('try again later!')
            }
        }
    },
    deleteComment: (id, idcomment, token) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.put('http://localhost:4000/api/comments/delete', {id, idcomment, token}, {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                })
                dispatch({type: 'DELETE_COMMENT', payload: res.config.data})
            } catch(error){
                Toast.error('try again later!')
            }
        }
    },
    modComment: (value, idcomment, id, token) => {
        return async (dispatch, getState) => {
            try{
                const res = await axios.put('http://localhost:4000/api/comments/', {value, idcomment, id, token}, {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                })
                dispatch({type: 'ADD_COMMENT', payload: res.config.data})
            } catch(error){
                Toast.error('try again later!')
            }
        }
    },
    like:(id, token) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.post('http://localhost:4000/api/likes/', {id, token}, {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                })
                dispatch({type: 'LIKE', payload: res.data})
            } catch(error){
                Toast.error('try again later!')
            }
        }
    },
    dislike:(id, token) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.post('http://localhost:4000/api/dislike/', {id, token}, {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                })
                dispatch({type: 'LIKE', payload: res.data})
            } catch(error){
                Toast.error('try again later!')
            }
        }
    }
}

export default itinerariesActions