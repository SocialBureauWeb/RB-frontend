import React from 'react'
import { Comingsoon } from '../components/Comingsoon'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Trending from '../components/Trending'
import Podcast from '../components/Podcast'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'

export const Home = () => {
  return (
    <div className="relative ">
        <Navbar/>
        <Comingsoon/>
        <Categories/>
        <Trending/>
        <Podcast/>
        <Reviews/>
        <Footer/>
    </div>
  )
}
