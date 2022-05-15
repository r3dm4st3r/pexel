import axios from "axios";
import {pexel} from "../helper/pexel";

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
        "Content-type": "application/json",
        "Authorization": pexel.API
    }
});