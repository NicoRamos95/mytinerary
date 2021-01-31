/* eslint-disable no-unreachable */
const initialState  = {
    itineraries: []
} 

export function itineraryReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHARGE_ITINERARIES':
            return {
                ...state,
                itineraries: action.payload
            }
            break
        default:
            return state
    }
}