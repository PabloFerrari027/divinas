import React from 'react'
import { BannerAppliques } from '../../components/BannerAppliques'
import { BannerEyelashes } from '../../components/BannerEyelashes'
import { BestSellers } from '../../components/BestSellers'
import { Footer } from '../../components/Footer'
import { HomeSlider } from '../../components/HomeSlider'
import { Loading } from '../../components/Loading'
import { Navbar } from '../../components/Navbar'
import { SeenIn } from '../../components/SeenIn'

import './Home.css'

const Home = () => {
  return (
    <div>
      <Loading />
      <Navbar />
      <main className="home">
        <HomeSlider />
        <BannerEyelashes />
        <BannerAppliques />
        <BestSellers />
        <SeenIn />
      </main>
      <Footer />
    </div>
  )
}

export default Home
