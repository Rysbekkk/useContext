import axios from 'axios';
import { API_PRODUCTS, API_FAKE } from './config';


export const getProducts = async (setProducts) => {
    const response = await axios.get(API_PRODUCTS)
    setProducts(response.data)
}





export const getDetailsfake = async (setDetails, id) => {


    const response = await axios.get(API_FAKE + id)
    setDetails(response.data)



}