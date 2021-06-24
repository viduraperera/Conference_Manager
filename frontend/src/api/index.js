import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).data.token}`;
  }
  return req;
});

//users auth urls
export const signUp = (fromData) => API.post('/');
export const login = (credentials) => API.post('/login', credentials);

//workshop urls
export const fetchWorkshop = () => API.get('/workshop');
export const createWorkshop = (newWorkshop) => API.post('/workshop', newWorkshop);
export const fetchSingleWorkshop = (id) => API.get(`/workshop/${id}`);
export const updateWorkshop = (workshop) => API.patch(`/workshop/${workshop._id}`, workshop);
export const deleteWorkshop = (id) => API.delete(`/workshop/${id}`);
