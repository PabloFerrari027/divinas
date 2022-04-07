import { Footer } from '../../components/Footer'
import { HomeSlider } from '../../components/HomeSlider'
import { Navbar } from '../../components/Navbar'

import './Home.css'

export function Home() {
  return (
    <>
      <Navbar />
      <main className="home">
        <HomeSlider />
      </main>
      <Footer />
    </>
  )
}
