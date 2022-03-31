import axios from  'axios';
const API = axios.create({baseURL: 'http://localhost:5000/'});

export const signin = (formData) => API.post('/userM/signinMov', formData);
export const signup = (formData) => API.post('/userM/signupMov', formData);
export const createGroup = (formData) => API.post('/groupM/createGroupMov', formData);
export const fetchGroupMov = (formData) => API.post('/groupM/fetchGroupMov', formData);
export const fetchUserGroupMov = (formData) => API.post('/groupM/fetchUserGroupMov', formData);