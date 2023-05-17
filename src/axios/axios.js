import axios from 'axios';

export const baseURL = "http://localhost:3005";


export default axios.create({baseURL});

export const URL = {
    add: '/add',
    delete: '/delete',
    update: '/update',
    getAll: '/get',
}

