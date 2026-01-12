// import React, { useState } from 'react';
// import axios from "axios";

// export const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState({ text: "", type: "" }); // type: "success" or "error"
//   const [showPassword, setShowPassword] = useState(false);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//     // Clear message when user starts typing
//     if (message.text) {
//       setMessage({ text: "", type: "" });
//     }
//   }
//      const handleGoogleLogin = async (response) => {
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/google/login",
//         { credential: response.credential }
//       );

//       console.log("Google Login Success:", res.data);
      
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       // navigate to homepage
//       window.location.href = "/";
      
//     } catch (err) {
//       console.error("Google login error:", err);
//       alert("Google login failed");
//     }
//   };
  
//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);
//     setMessage({ text: "", type: "" });

//     // Validate inputs
//     if (!form.email || !form.password) {
//       setMessage({ text: "Please fill in all fields", type: "error" });
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(`${BASE_URL}/api/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setMessage({ text: data.message || "Login failed", type: "error" });
//         setLoading(false);
//         return;
//       }

//       // ✅ IMPORTANT: Save token to localStorage
//       if (data.token) {
//         localStorage.setItem("token", data.token);
        
//         // Optional: Save user info too
//         if (data.user) {
//           localStorage.setItem("user", JSON.stringify(data.user));
//         }
//       }

//       // Show success message
//       setMessage({ text: "Login successful! Redirecting...", type: "success" });
      
//       // Clear form
//       setForm({ email: "", password: "" });

//       // Redirect to home after a delay
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 1500);

//     } catch (err) {
//       console.error("Login error:", err);
//       setMessage({ text: "Something went wrong. Please try again.", type: "error" });
//       setLoading(false);
//     }
//   }
  

//   return (
//     <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-6">
//       <div className="max-w-6xl w-full bg-white/95 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

//         {/* Left: Form */}
//         <div className="p-10 md:p-12 bg-white">
//           <div className="max-w-md mx-auto">
//             <img src="/assets/realtybureau.png" alt="RealtyBureau" className="h-12 mb-8" />

//             <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
//             <p className="text-gray-600 mb-6">Login with your email</p>

//             <form onSubmit={handleSubmit} className="space-y-4">

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   name="email"
//                   type="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   disabled={loading}
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent"
//                   placeholder="you@example.com"
//                 />
//               </div>

//               {/* Password with Show/Hide toggle */}
//               <div className="relative">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//                 <input
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   value={form.password}
//                   onChange={handleChange}
//                   disabled={loading}
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent pr-10"
//                   placeholder="Enter password"
//                 />
//                 <button 
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   disabled={loading}
//                   className="absolute right-3 top-9 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full py-3 mt-6 rounded-lg bg-green-900 text-white font-semibold hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </button>

//               {/* Message Display at Bottom */}
//               {message.text && (
//                 <div className={`mt-4 p-3 rounded-lg text-center font-medium ${
//                   message.type === "success" 
//                     ? "bg-green-100 text-green-800 border border-green-200" 
//                     : "bg-red-100 text-red-800 border border-red-200"
//                 }`}>
//                   <span>{message.text}</span>
//                 </div>
//               )}

//               <p className="text-center text-sm text-gray-600 mt-4">
//                 Don't have an account?{" "}
//                 <a href="/signup" className="text-green-900 font-semibold hover:underline">
//                   Sign up here
//                 </a>
//               </p>

//             </form>
//           </div>
//         </div>

//         {/* Right: Image */}
//         <div className="hidden md:block relative">
//           <div
//             className="absolute inset-6 rounded-2xl overflow-hidden"
//             style={{
//               backgroundImage: `url('https://i.pinimg.com/1200x/bc/aa/cd/bcaacd7cbc1436fd2a75c1161b52546c.jpg')`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}
//           >
//             <div className="absolute inset-0 bg-black/20"></div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };




import React, { useState } from 'react';
import axios from "axios";
import { loginUser, googleLogin } from "../api/auth";

export const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" }); // type: "success" or "error"
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear message when user starts typing
    if (message.text) {
      setMessage({ text: "", type: "" });
    }
  }
     const handleGoogleLogin = async (response) => {
    try {
      const res = await googleLogin(response.credential);

      console.log("Google Login Success:", res.data);
      
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // navigate to homepage
      window.location.href = "/";
      
    } catch (err) {
      console.error("Google login error:", err);
      alert("Google login failed");
    }
  };
  
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    // Validate inputs
    if (!form.email || !form.password) {
      setMessage({ text: "Please fill in all fields", type: "error" });
      setLoading(false);
      return;
    }

    try {
      const data = await loginUser(form);

      if (data.token) {
        localStorage.setItem("token", data.token);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }
      }

      setMessage({ text: "Login successful!", type: "success" });

      setTimeout(() => {
        window.location.href = "/";
      }, 1500);

    } catch (error) {
      console.error(error);
      setMessage({ text: "Invalid login", type: "error" });
    }

  }
  

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white/95 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left: Form */}
        <div className="p-10 md:p-12 bg-white">
          <div className="max-w-md mx-auto">
            <img src="/assets/realtybureau.png" alt="RealtyBureau" className="h-12 mb-8" />

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600 mb-6">Login with your email</p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password with Show/Hide toggle */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  disabled={loading}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent pr-10"
                  placeholder="Enter password"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  className="absolute right-3 top-9 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 mt-6 rounded-lg bg-green-900 text-white font-semibold hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {/* Message Display at Bottom */}
              {message.text && (
                <div className={`mt-4 p-3 rounded-lg text-center font-medium ${
                  message.type === "success" 
                    ? "bg-green-100 text-green-800 border border-green-200" 
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}>
                  <span>{message.text}</span>
                </div>
              )}

              <p className="text-center text-sm text-gray-600 mt-4">
                Don't have an account?{" "}
                <a href="/signup" className="text-green-900 font-semibold hover:underline">
                  Sign up here
                </a>
              </p>

            </form>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hidden md:block relative">
          <div
            className="absolute inset-6 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url('https://i.pinimg.com/1200x/bc/aa/cd/bcaacd7cbc1436fd2a75c1161b52546c.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

      </div>
    </div>
  );
};






