import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}>
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}
export default App
