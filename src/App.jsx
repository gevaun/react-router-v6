import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container mx-auto max-w-7xl px-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/vans' element={<Vans />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
