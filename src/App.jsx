import React, { useMemo, useState } from 'react'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollTop from './components/ScrollToTop'
import { NotFound } from './pages/NotFound'
import AddProperty from './pages/AddProperty'
import Commercial from './pages/Commercial'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'

export default function App() {  
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
       <ScrollTop />
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}