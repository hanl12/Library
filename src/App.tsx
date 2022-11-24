import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Google, Home, MovieDb } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="google" element={<Google />} />
        <Route path="moviedb" element={<MovieDb />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
