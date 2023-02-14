import axios from "axios";

export const apiCrud = axios.create({
  baseURL: 'https://crudcrud.com/api/cc9c7d30c890426c861b464a2ad8f31e'
})

export const apiCEP = axios.create({
  baseURL: 'https://viacep.com.br/ws'
})