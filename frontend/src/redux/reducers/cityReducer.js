const initialState = {
    cities: [],
    filter: [],
}
export function cityReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHARGE_CITIES':
            return {
                ...state,
                cities: action.payload,
                filter: action.payload
            }
            break
        case 'SEARCH_CITIES':
            return{
                ...state,
                filter: state.cities.filter(item => item.cityName.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0)
            }
        default:
            return state
    }
}