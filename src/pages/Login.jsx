import React, { useState } from 'react'

export const Login = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Placeholder action - replace with real auth
    console.log('submit', form)
    alert('Submitted — integrate auth to proceed')
  }

  return (
    <div className="min-h-screen bg-[url('#')] bg-cover bg-center flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white/95 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: Form */}
        <div className="p-10 md:p-12 bg-white">
          <div className="max-w-md mx-auto">
            <img src="/assets/realtybureau.png" alt="RealtyBureau" />

            <div className="mt-6 flex items-center gap-3">
              <button aria-label="Sign in with Google" className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200">
               <i class="fa fa-google" aria-hidden="true"></i>
              </button>
              <button aria-label="Sign in with Facebook" className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200">
               <i class="fa fa-facebook" aria-hidden="true"></i>
              </button>
              <button aria-label="Sign in with Pinterest" className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200">
                <i class="fa fa-pinterest" aria-hidden="true"></i>
              </button>
            </div>

            <div className="my-4 text-center text-sm text-gray-500">or</div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name</label>
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
                  placeholder="Enter a password"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-green-900 text-white font-semibold hover:bg-green-800 transition-colors"
                >
                  Start
                </button>
              </div>

              <p className="text-center text-sm text-gray-500">Already have an account? <a href="#login" className="text-green-900 font-medium">Log in</a></p>
            </form>
          </div>
        </div>

        {/* Right: Image pane */}
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
            {/* optional callouts */}
          </div>
        </div>
      </div>
    </div>
  )
}
