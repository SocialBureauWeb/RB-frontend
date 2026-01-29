import axios from "axios";
import { BASE_URL } from "../../utils/urls";
import toast from "react-hot-toast";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: BASE_URL,
});

// Add request interceptor to include token in all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Check if the error is due to unauthorized access (expired or invalid token)
    if (error.response && error.response.status === 401) {
      const message = error.response.data?.message || "";

      // Check if it's a token-related error (not a login attempt failure)
      // Only auto-logout if user was previously logged in
      const token = localStorage.getItem("token");
      if (token && (
        message.includes("expired") ||
        message.includes("invalid") ||
        message.includes("Unauthorized") ||
        message.includes("No token")
      )) {
        // Clear authentication data
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // Show toast notification
        toast.error("Your session has expired. Please login again.");

        // Redirect to login page
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

// Helper function to check if token is expired (JWT decode)
export function isTokenExpired() {
  const token = localStorage.getItem("token");
  if (!token) return true;

  try {
    // Decode JWT payload (base64)
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expiry = payload.exp * 1000; // Convert to milliseconds
    return Date.now() >= expiry;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
}

// Function to logout user and clear data
export function logoutUser() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
}

// Function to check token and logout if expired
export function checkTokenExpiration() {
  const token = localStorage.getItem("token");
  if (token && isTokenExpired()) {
    toast.error("Your session has expired. Please login again.");
    logoutUser();
  }
}

// Normal Email/Password Login (using regular axios, not the api instance)
// Login shouldn't trigger auto-logout on 401 errors
export async function loginUser(form) {
  const response = await axios.post(`${BASE_URL}/api/auth/login`, form);
  return response.data;
}

// Google Login API (using regular axios)
export async function googleLogin(credential) {
  const response = await axios.post(`${BASE_URL}/api/google/login`, {
    credential,
  });
  return response.data;
}

// Signup (using regular axios)
export const signupUser = async (formData) => {
  return await axios.post(`${BASE_URL}/api/auth/signup`, formData);
};

// Export the api instance for use in authenticated API calls
export { api };
export default api;
