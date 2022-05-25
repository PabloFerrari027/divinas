import Footer from '../../components/Footer'
import Loading from '../../components/Loading'
import Navbar from '../../components/Navbar'
import Navegation from '../../components/Navegation'
import Newsletter from '../../components/Newsletter'
import Appliques from '../../screens/Appliques'
import BestSellers from '../../screens/BestSellers'
import Carousel from '../../screens/Carousel'
import Eyelashes from '../../screens/Eyelashes'
import SeenIn from '../../screens/Seenin'

import './styles.css'

const Home = () => {
  return (
    <div>
      <Loading />
      <Navbar />
      <main className="home">
        <Carousel />
        <Eyelashes />
        <Appliques />
        <BestSellers />
        <SeenIn />
      </main>
      <Newsletter />
      <Navegation />
      <Footer />
    </div>
  )
}

export default Home
