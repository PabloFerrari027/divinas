import { Link } from 'react-router-dom'
import './NavbarNavegation.css'

export function NavbarNavegtion({ active }: { active: boolean }) {
  return (
    <nav className={`navegation ${active && 'active'}`}>
      <ul>
        <li>Comprar Tudo</li>
        <li>Apliques de cabelo</li>
        <li>Cílios</li>
        <li>Acessórios</li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  )
}
