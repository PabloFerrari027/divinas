import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import Home from '../pages/Home'
import { Privacy } from '../pages/Privacy'

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default routes
