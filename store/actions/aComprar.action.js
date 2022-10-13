import { aComprarTypes } from "../types"

const { DELETE_ACOMPRAR, ADD_ACOMPRAR } = aComprarTypes;

export const addComprar = (comprar) => ({
    type: ADD_ACOMPRAR,
    comprar
});

export const deleteComprar = (id) => ({
    type: DELETE_ACOMPRAR,
    id
})