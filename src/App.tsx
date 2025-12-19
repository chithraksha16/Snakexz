import { Routes,Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Snake from './pages/Snake'
import About from './pages/About'

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Snake/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
