import axios from "axios";
import { BASE_URL } from "../utils/urls";

// Normal Email/Password Login
export async function loginUser(form) {
  const response = await axios.post(`${BASE_URL}/api/auth/login`, form);
  return response.data;
}

// Google Login API
export async function googleLogin(credential) {
  const response = await axios.post(`${BASE_URL}/api/google/login`, {
    credential,
  });
  return response.data;
}


export const signupUser = async (formData) => {
  return await axios.post(`${BASE_URL}/api/auth/signup`, formData);
};

