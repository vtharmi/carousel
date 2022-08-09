import Axios from "axios";
const REACT_APP_API_URL_BE = "http://localhost:8000/api/"

const api = Axios.create({
  baseURL: REACT_APP_API_URL_BE ,
  headers: {
    // Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
