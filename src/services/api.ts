import axios from "axios";

export const Api = axios.create({
  baseURL: "htts://reqres.in/api/",
});
