import { NavbarHandbag } from '../NavbarHandbag'
import { NavbarLogo } from '../NavbarLogo'
import { NavbarMenuContainer } from '../NavbarMenuContainer'

import './Navbar.css'

export function Navbar() {
  return (
    <div className="navbar-container container">
      <NavbarLogo />
      <NavbarHandbag />
      <NavbarMenuContainer />
    </div>
  )
}
