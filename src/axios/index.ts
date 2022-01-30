import axios from "axios";
const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

api.interceptors.request.use((config) => {
  config.url = config.url + "&units=metric" + "&appid=" + import.meta.env.REACT_APP_API_KEY;
  return config;
});

export default api;
