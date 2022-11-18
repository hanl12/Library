import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Google, Home } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="google" element={<Google />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
