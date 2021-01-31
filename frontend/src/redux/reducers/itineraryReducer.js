/* eslint-disable no-unreachable */
const initialState  = {
    itineraries: [],
    loader: true
} 

export function itineraryReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHARGE_ITINERARIES':
            return {
                ...state,
                itineraries: action.payload,
                loader: false
            }
            break
        default:
            return state
    }
}