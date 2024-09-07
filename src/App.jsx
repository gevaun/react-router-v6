import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HostLayout from './components/layout/HostLayout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'

import './server'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetail />}></Route>
            <Route element={<HostLayout />} path='/host'>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
