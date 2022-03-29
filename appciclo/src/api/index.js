import axios from  'axios';
const API = axios.create({baseURL: 'http://localhost:5000/'});

export const signin = (formData) => API.post('/userM/signinMov', formData);
export const signup = (formData) => API.post('/userM/signupMov', formData);
export const createGroup = (formData) => API.post('/groupM/getGroupMov', formData);