import { useState } from 'react'
import { NavbarNavegtion } from '../NavbarNavegtion'
import './NavbarMenuContainer.css'

export function NavbarMenuContainer() {
  const [isActive, setActive] = useState(false)

  return (
    <div className="menu-container">
      <button onClick={() => setActive(!isActive)}>
        <span className={`${isActive && 'active'}`}></span>
        <span className={`${isActive && 'active'}`}></span>
        <span className={`${isActive && 'active'}`}></span>
      </button>
      <NavbarNavegtion active={isActive} />
    </div>
  )
}
