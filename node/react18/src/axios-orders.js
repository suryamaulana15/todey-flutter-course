import axios from 'axios';

const instance = axios.create({
  baseURL: `https://ws.audioscrobbler.com/2.0/`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
})

instance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response)
    }),
  (error) => {
    console.log(error.response.status);
    return Promise.reject(error);
  }
)

export default instance
