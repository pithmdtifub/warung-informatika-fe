import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Navbar from './components/NavbarComponent/Navbar.jsx'
import BagianAtas from './components/DaftarMenu/BagianAtas.jsx'
import BagianBawah from './components/DaftarMenu/BagianBawah.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <BagianAtas />
    <BagianBawah />
  </StrictMode>
)
