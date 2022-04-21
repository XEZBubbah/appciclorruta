import axios from  'axios';
const API = axios.create({baseURL: 'http://localhost:5000/'});

export const signin = (formData) => API.post('/userM/signinMov', formData);
export const signup = (formData) => API.post('/userM/signupMov', formData);
export const fetchImg = (formData) => API.post('/userM/fetchUserAvatar', formData);
export const createGroup = (formData) => API.post('/groupM/createGroupMov', formData);
export const fetchGroupMov = (formData) => API.post('/groupM/fetchGroupMov', formData);
export const fetchUserGroupMov = (formData) => API.post('/groupM/fetchUserGroupMov', formData);
export const fetchUserInfo = (formData) => API.post('/userM/fetchUserInfo', formData);
export const modifyUserInfo = (formData) => API.post('/userM/modifyUserInfo', formData);
export const deleteUser = (formData) => API.post('/userM/deleteUserAccount', formData);
export const sendMessage = (formData) => API.post('/chatM/storeUserMessages', formData);
export const loadMessage = (formData) => API.post('/chatM/fetchChatMessagest', formData);
export const vincularGrupo = (formData) => API.post('/groupM/vinculateToGroup', formData);
export const eliminarGrupo = (formData) => API.post('/groupM/deleteUserGroup', formData);
