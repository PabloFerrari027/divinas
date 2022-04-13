import { Link } from 'react-router-dom'
import './FooterNavigation.css'

export function FooterNavigation() {
  return (
    <nav className="navegation">
      <ul>
        <li>
          <a href="/">Comprar Tudo</a>
        </li>
        <li>
          <a href="/">Apliques de Cabelo</a>
        </li>
        <li>
          <a href="/">Cílios</a>
        </li>
        <li>
          <a href="/">Acessórios</a>
        </li>
        <li>
          <Link to="/about">Sobre Nós</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <a href="/">Envio e Retorno</a>
        </li>
        <li>
          <Link to="/privacy">Polítca da Loja</Link>
        </li>
        <li>
          <a href="/">Perguntas Frequentes</a>
        </li>
      </ul>
    </nav>
  )
}
