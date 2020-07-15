import axios from 'axios';

export const baseUrl = 'https://test-pizza-backend.herokuapp.com/';
export const apiHelper = axios.create({
    baseURL: 'https://test-pizza-backend.herokuapp.com/api',
    timeout: 3000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    }
});
