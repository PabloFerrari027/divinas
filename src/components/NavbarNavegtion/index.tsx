import './NavbarNavegation.css'

export function NavbarNavegtion({ active }: { active: boolean }) {
  return (
    <nav className={`navegation ${active && 'active'}`}>
      <ul>
        <li>Comprar Tudo</li>
        <li>Apliques de cabelo</li>
        <li>Cílios</li>
        <li>Acessórios</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </nav>
  )
}
