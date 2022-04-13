import { DescriptionPage } from '../../components/DescriptionPage'
import { Footer } from '../../components/Footer'
import { Loading } from '../../components/Loading'
import { Navbar } from '../../components/Navbar'

import './Contact.css'

export function Contact() {
  return (
    <div>
      <Loading />
      <Navbar />
      <main className="contact">
        <DescriptionPage description="contate-nos" />
        <div className="container">
          <h1>atendimento ao cliente</h1>
          <p>Entre em contato conosco via chat, email ou telefone</p>
          <div className="infos">
            <p>
              <a href="mailto:teste@gmail.com">info@meusite.com</a> |{' '}
              <a href="tel:113456-7890"> Tel: (11) 3456-7890</a> |{' '}
              <span>seg - sex 7:00 às 17:00</span>
            </p>
          </div>
          <div className="form">
            <h2>Você também pode nos enviar uma mensagem pelo formulário:</h2>
            <input type="text" name="name" placeholder="Nome" />
            <input type="email" placeholder="Email" name="email" />
            <input type="tel" placeholder="Telefone" name="tel" />
            <textarea name="Descrição">Mensagem</textarea>
            <button className="btn-pink">Enviar</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
