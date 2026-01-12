import React, { useMemo, useState } from 'react'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollTop from './components/ScrollToTop'
import { NotFound } from './pages/NotFound'
import AddProperty from './pages/AddProperty'
import Commercial from './pages/Commercial'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import Wishlist from './pages/Wishlist'
import Modal from './components/Modal'
import Residential from './pages/Residential'
import PrivacyPolicy from './pages/Privacy'
import TermsAndConditions from './pages/TermsNConditions'
import About from './pages/About'
// import PropertyDetail from './pages/PropertyDetail'

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
          <Route path="/modal" element={<Modal />} />
          <Route path='/privacy-Policy' element={<PrivacyPolicy />} />
          <Route path='/residential' element={<Residential />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/property/:id" element={<PropertyDetail />} /> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}