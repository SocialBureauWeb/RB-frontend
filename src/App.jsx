import React, { useEffect, useMemo, useState } from 'react'
import { Toaster } from 'react-hot-toast';
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
import Contact from './pages/Contact'
import { checkTokenExpiration } from './api/auth'
// import BlobLoader from './components/Loading'
// import PropertyDetail from './pages/PropertyDetail'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
        {/* <Navbar/> */}
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/modal" element={<Modal />} />
          <Route path='/privacy-Policy' element={<PrivacyPolicy />} />
          <Route path='/residential' element={<Residential />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/property/:id" element={<PropertyDetail />} /> */}
          <Route path="/*" element={<NotFound />} />
          <Route path="/property/:slug" element={<Modal />} />
          {/* <Route path="/loading" element={<BlobLoader />} /> */}


        </Routes>
      </BrowserRouter>
    </>
  )
}