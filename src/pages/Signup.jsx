
import React, { useState } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { signupUser } from "../api/auth"; 

export const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (message.text) {
      setMessage({ text: "", type: "" });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    if (form.password !== form.confirmPassword) {
      setMessage({ text: "Passwords do not match", type: "error" });
      return;
    }

    setLoading(true);

    try {
      const { data } = await signupUser(form);   // ✅ FIX: Use API

      setMessage({ text: "Signup successful! Redirecting...", type: "success" });

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);

    } catch (err) {
      console.error(err);
      setMessage({ text: err?.response?.data?.message || "Signup failed", type: "error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[url('#')] bg-cover bg-center flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white/95 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        <div className="p-10 md:p-12 bg-white">
          <div className="max-w-md mx-auto">

            <img src="/assets/realtybureau.png" alt="RealtyBureau" />

          {/*<GoogleOAuthProvider clientId={
            import.meta.env.VITE_GOOGLE_ID
          }>
          <div className="mt-6 flex items-center gap-3">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                const userData = jwtDecode(credentialResponse.credential);

                const res = await axios.post(`${BASE_URL}/api/google/auth`, {
                  name: userData.name,
                  email: userData.email,
                  picture: userData.picture,
                  googleId: userData.sub,
                });

                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));  
                window.location.href = "/";
              }}
              onError={() => console.log("Google Signup Failed")}
            />
          </div>
        </GoogleOAuthProvider>*/}

            <div className="my-4 text-center text-sm text-gray-500">or</div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full 
                  focus:ring-2 focus:ring-green-900"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full 
                  focus:ring-2 focus:ring-green-900"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type={showPassword ? "text" : "password"}  // Fixed: using showPassword
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full 
                  focus:ring-2 focus:ring-green-900 pr-10"
                  placeholder="Create a password"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-sm text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={form.confirmPassword}  // Fixed: not confConfirmPassword
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full 
                  focus:ring-2 focus:ring-green-900 pr-10"
                  placeholder="Re-enter password"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-9 text-sm text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-full font-semibold transition-colors ${
                  loading 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-green-900 hover:bg-green-800 text-white"
                }`}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

              {/* Message Display */}
              {message.text && (
                <div className={`mt-4 p-3 rounded-lg text-center font-medium ${
                  message.type === "success" 
                    ? "bg-green-100 text-green-800 border border-green-200" 
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}>
                  <span>{message.text}</span>
                </div>
              )}

              <p className="text-center text-sm text-gray-500 mt-4">
                Already have an account?  
                <a href="/login" className="text-green-900 font-medium"> Log in</a>
              </p>
            </form>
          </div>
        </div>

        {/* Right: Background Image */}
        <div className="hidden md:block relative">
          <div
            className="absolute inset-6 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url('https://i.pinimg.com/1200x/bc/aa/cd/bcaacd7cbc1436fd2a75c1161b52546c.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

      </div>
    </div>
  );
};





