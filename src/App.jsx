import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'

import './server'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className=''>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path='/vans' element={<Vans />}></Route>
              <Route path='/vans/:id' element={<VanDetail />}></Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
