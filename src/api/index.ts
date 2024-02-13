import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export { axiosBase };
