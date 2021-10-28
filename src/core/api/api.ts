import axios from 'axios';
import { IProduct } from '../interfaces/IProduct';

const apiInstance = axios.create({
    baseURL: 'https://fakestoreapi.com/'
});

const getProducts = () => apiInstance.get<Array<IProduct>>('/products').then(response => response.data);

const products = {
    get: getProducts
};

const api = {
    products
};

export default api;

