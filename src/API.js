import axios from "axios";

const api = axios.create({
  baseURL: "https://movie-review-upce.herokuapp.com",
  responseType: "json",
  headers: {'Content-Type': 'application/json'},
});

api.interceptors.request.use(
    config => {
      let token = getAuthenticationToken();
      if (token) {
        config.headers.Authorization = token;
      }
      return config
    }
)

function getAuthenticationToken() {
  let token = localStorage.getItem('token')
  if (token){
    return token;
  }
  return null;
}

export default api;
