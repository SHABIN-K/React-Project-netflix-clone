import axios  from "axios";
import { base_URL } from "./Constants/Constants";

const instance = axios.create({
    baseURL: base_URL,
  });


  export default instance;