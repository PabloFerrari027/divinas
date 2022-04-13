import { DescriptionPage } from '../../components/DescriptionPage'
import { Footer } from '../../components/Footer'
import { Loading } from '../../components/Loading'
import { Navbar } from '../../components/Navbar'
import './About.css'

export function About() {
  return (
    <div>
      <Loading />
      <Navbar />
      <main className="about">
        <DescriptionPage description="nossa história" />
        <div className="container">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            odio! Possimus assumenda cum culpa sunt. Ipsum ipsam architecto
            quas, asperiores fugiat quaerat at harum aut a in voluptatibus neque
            nemo assumenda hic dicta est recusandae sint, maiores obcaecati
            perferendis temporibus. Fuga autem ducimus officia tempore, sit
            ullam, quaerat pariatur nobis enim minima aspernatur facere repellat
            eaque. Eligendi, ab aut. Dolorem a, omnis, nesciunt iste blanditiis
            rem fuga nam, culpa earum tempore error reprehenderit esse saepe
            vero harum dolore aperiam quo quas laborum minus! Modi assumenda
            quod expedita, eos quidem corrupti sunt eligendi deleniti harum eius
            nostrum ex? Officia, hic impedit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            tempora dolore excepturi suscipit hic, soluta provident sed nihil
            officia iure placeat aut qui quaerat ut maxime perferendis repellat
            architecto impedit.
          </p>
          <div className="images">
            <div className="img">
              <img src="/images/about-1.webp" alt="" />
            </div>
            <div className="img">
              <img src="/images/about-2.webp" alt="" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
