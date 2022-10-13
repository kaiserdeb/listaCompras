import { createStore, combineReducers } from "redux";
import { comprasReducer, aComprarReducer } from "./reducers";

const rootReducer = combineReducers({
    compras: comprasReducer,
    aComprar: aComprarReducer
});

export default createStore(rootReducer);