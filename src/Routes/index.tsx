import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import { Privacy } from '../pages/Privacy'

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default routes
