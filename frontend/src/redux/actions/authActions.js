import axios from "axios"

const authActions = {
    newUser: (user) => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/api/user/register', user)
            console.log(response)
            if (!response.data.success) {
                return response.data
            }
            dispatch({type: 'LOG_USER', payload: response.data})
        }
    },
    logOutUser: () => {
        return (dispatch, getState) => {
            dispatch({type: 'LOG_OUT_USER'})
        }
    },
    loginUser: (user) => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/api/user/login', user)
            if (!response.data.success) {
                return response.data
            }
            dispatch({type: 'LOG_USER', payload: response.data})
        }
    }
}

export default authActions