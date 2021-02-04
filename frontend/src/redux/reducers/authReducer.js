const initialState = {
    loggedUser: null
}

export function authReducer(state = initialState, action) { 
    switch (action.type) {
        case 'LOG_USER':
            return { 
                ...state,
                loggedUser: action.payload
            }
        case 'LOG_OUT_USER':
            return {
                ...state,
                loggedUser: null

            }
        default:
            return state
    }

}