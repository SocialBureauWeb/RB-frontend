import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../utils/urls'

export const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await axios.post(`${BASE_URL}/api/auth/signup`, form)
      
      if (response.data.success) {
        alert('Account created successfully! Redirecting to login...')
        navigate('/login')
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.')
      console.error('Signup error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[url('#')] bg-cover bg-center flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white/95 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left: Signup Form */}
        <div className="p-10 md:p-12 bg-white">
          <div className="max-w-md mx-auto">
            <img src="/assets/realtybureau.png" alt="RealtyBureau" />

            <div className="mt-6 flex items-center gap-3">
              <button aria-label="Sign in with Google" className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200">
               <i className="fa fa-google" aria-hidden="true"></i>
              </button>
              <button aria-label="Sign in with Facebook" className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200">
               <i className="fa fa-facebook" aria-hidden="true"></i>
              </button>
              <button aria-label="Sign in with Pinterest" className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200">
                <i className="fa fa-pinterest" aria-hidden="true"></i>
              </button>
            </div>

            <div className="my-4 text-center text-sm text-gray-500">or</div>

            {error && (
              <div className="p-3 mb-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-900"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-900"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-900"
                  placeholder="Create a password"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full bg-green-900 text-white font-semibold hover:bg-green-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </div>

              <p className="text-center text-sm text-gray-500">
                Already have an account? 
                <a href="/login" className="text-green-900 font-medium"> Log in</a>
              </p>
            </form>
          </div>
        </div>

        {/* Right: Image Pane */}
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
  )
}
