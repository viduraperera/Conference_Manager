import axios from "axios";

const API = axios.create({baseURL : 'http://localhost:1234/api'});

API.interceptors.request.use((req) =>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).data.token}`;
    }
    return req;
});

export const fetchWorkshop = () => API.get('/workshop');