import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Menu: React.FC = () => {
  const [isActive, setActive] = useState(false)

  return (
    <div className="menu-container">
      <button onClick={() => setActive(!isActive)}>
        <span className={`${isActive && 'active'}`}></span>
        <span className={`${isActive && 'active'}`}></span>
        <span className={`${isActive && 'active'}`}></span>
      </button>
      <nav className={`menu-navegation ${isActive && 'active'}`}>
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
    </div>
  )
}

export default Menu
