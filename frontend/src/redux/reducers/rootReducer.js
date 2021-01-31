import { combineReducers } from "redux";
import { cityReducer } from "./cityReducer";
import { itineraryReducer } from "./itineraryReducer";

const rootReducer = combineReducers({
    itineraryR: itineraryReducer,
    cityR: cityReducer
})

export default rootReducer