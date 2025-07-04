import axios from 'axios';

const API_BASE_URL = 'https://taobao.com/api';
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.timeout = 10000;

const getAccessToken = () => {
  return sessionStorage.getItem('auth_token') || localStorage.getItem('auth_token') || null;
};

const setAccessToken = (token, rememberMe = false) => {
  rememberMe 
    ? localStorage.setItem('auth_token', token)
    : sessionStorage.setItem('auth_token', token);
};

const clearTokens = () => {
  sessionStorage.removeItem('auth_token');
  localStorage.removeItem('auth_token');
};

axios.interceptors.request.use(config => {
  if (config.url.includes('/api/denglu/')) {
    return config;
  }
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => response, error => {
  if (error.response?.status === 401) {
    clearTokens()
    window.location.href = '/login?session=expired';
  }
  
  return Promise.reject(error);
});

export const login = async (credentials, rememberMe) => {
  try {
    const response = await axios.post('/auth/login', credentials);
    
    if (response.data.accessToken) {
      setAccessToken(response.data.accessToken, rememberMe);
      return { success: true };
    }
    
    return { success: false, message: 'No access token received' };
  } catch (error) {
    return { 
      success: false, 
      message: error.response?.data?.message || 'Login failed' 
    };
  }
};
