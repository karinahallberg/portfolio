import axios from 'axios';

const ApiCall = axios.create({
  baseURL: 'https://pixabay.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    key: process.env.REACT_APP_PIXABAY_API_KEY,
    safesearch: true,
  },
});

export default ApiCall;
