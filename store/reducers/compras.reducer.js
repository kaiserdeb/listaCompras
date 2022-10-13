import { comprasTypes } from '../types';
const { ADD_COMPRA, DELETE_COMPRA } = comprasTypes;

const initialState ={
    compras: [],
}

const comprasReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPRA:
            let comprasTMP = [...state.compras, action.compra];
        return {
            ...state,
            compras: comprasTMP
        }
        case DELETE_COMPRA:
            return {
                ...state,
                compras: state.compras.filter(compra => compra.id !== action.id)
            }
        default: 
            return state;
    }
}


export default comprasReducer;