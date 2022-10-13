import { comprasTypes } from "../types"

const { ADD_COMPRA, DELETE_COMPRA } = comprasTypes;

export const addCompra = (compra) => ({
    type: ADD_COMPRA,
    compra
});

export const deleteCompra = (id) => ({
    type: DELETE_COMPRA,
    id
})