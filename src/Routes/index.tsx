import { Routes, Route } from 'react-router-dom'
import { Home } from '../Home'

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
