import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 15000
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('eduenrich_admin_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const submitDemo = (payload) => api.post('/demo', payload);
export const submitContact = (payload) => api.post('/contact', payload);
export const submitCareer = (payload) =>
  api.post('/careers', payload, { headers: { 'Content-Type': 'multipart/form-data' } });
export const submitTutor = (payload) =>
  api.post('/tutors', payload, { headers: { 'Content-Type': 'multipart/form-data' } });
export const fetchCurriculum = () => api.get('/curriculum');
export const fetchIndianSubject = (curriculum, grade, subject) =>
  api.get(`/curriculum/${curriculum}/${grade}/${subject}`);
export const adminLogin = (payload) => api.post('/admin/login', payload);
export const fetchAdminData = (resource) => api.get(`/admin/${resource}`);
export const deleteAdminEntry = (resource, id) => api.delete(`/admin/${resource}/${id}`);
export const fetchTutorResume = (id) => api.get(`/admin/tutors/${id}/resume`, { responseType: 'blob' });
export const downloadTutorResume = (id) => api.get(`/admin/tutors/${id}/resume/download`, { responseType: 'blob' });

export default api;
