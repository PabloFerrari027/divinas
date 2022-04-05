import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
