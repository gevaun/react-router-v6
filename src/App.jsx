import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'

import './server'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container mx-auto max-w-7xl px-4 py-6'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/vans' element={<Vans />}></Route>
            <Route path='/vans/:id' element={<VanDetail />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
