
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { FooterTwo } from './pages/Footer'
import { Login } from './pages/Login'
import { Navbar } from './pages/Navbar'
import ProductCard from './pages/ProductCard'

function App() {
  return (
    <>
      <Navbar />
      
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<ProductCard />}/>
        </Routes>
      </BrowserRouter>
      <FooterTwo />
    </>
  )
}

export default App
