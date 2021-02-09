import axios from "axios"

const authActions = {
    newUser: (user) => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/api/user/register', user)
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
    logLS: (token) => {
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.post('http://localhost:4000/api/user/ls', {token}, {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
                
            }) 
            console.log(respuesta)
            dispatch({type: 'LOG_USER', payload: {response: {...respuesta.data.response}}})
            } catch(err) {
                if (err.response.statu === 401) {
                    alert("Usted esta intentando entrar...")
                    localStorage.clear()
                    return '/'
                }
            }
        }
    },
    loginUser: (user) => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/api/user/login', user)
            console.log(response.data.response)
            if (!response.data.success) {
                return response.data
            }
            dispatch({type: 'LOG_USER', payload: response.data})
        }
    }
}

export default authActions