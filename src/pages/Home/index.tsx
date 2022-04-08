import { BannerAppliques } from '../../components/BannerAppliques'
import { BannerEyelashes } from '../../components/BannerEyelashes'
import { Footer } from '../../components/Footer'
import { HomeSlider } from '../../components/HomeSlider'
import { Loading } from '../../components/Loading'
import { Navbar } from '../../components/Navbar'

import './Home.css'

export function Home() {
  return (
    <>
      <Loading />
      <Navbar />
      <main className="home">
        <HomeSlider />
        <BannerEyelashes />
        <BannerAppliques />
      </main>
      <Footer />
    </>
  )
}
