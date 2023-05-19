import axios from 'axios';

export const baseURL = "http://localhost:3000";


export default axios.create({baseURL});

export const URL = {
    add: '/notes',
    delete: '/notes',
    update: '/notes',
    getAll: '/notes',
}

