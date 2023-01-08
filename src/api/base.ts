import axios from "axios";

const baseAPI = axios.create({
  baseURL: "https://itunes.apple.com/",
});

export default baseAPI;
