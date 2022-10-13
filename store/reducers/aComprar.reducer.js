import { aComprarTypes } from '../types'
const { DELETE_ACOMPRAR, ADD_ACOMPRAR } = aComprarTypes;

const initialState ={
    aComprar: []
}
const aComprarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACOMPRAR:
            let addTMP = [...state.aComprar, action.comprar];
            return {
                ...state,
                aComprar: addTMP
            }
        case DELETE_ACOMPRAR:
            return {
                ...state,
                aComprar: state.aComprar.filter(aComprar => aComprar.id !== action.id)
            }
        default: 
            return state;
    }
}

export default aComprarReducer;