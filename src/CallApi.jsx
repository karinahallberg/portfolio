import axios from "axios";

export default axios.create({
  baseURL: "https://picsum.photos/300/200",
  responseType: "json"
});