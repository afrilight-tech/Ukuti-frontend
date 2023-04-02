import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/InnerComponents/About'

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);



  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      
      </Routes>


      <Footer />
    </>
  )
}

export default App
