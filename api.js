import axios from "axios";
import { BASE_URL } from "./utils/urls";

export const API = axios.create({
  baseURL: `${BASE_URL}/api/auth`,
});
