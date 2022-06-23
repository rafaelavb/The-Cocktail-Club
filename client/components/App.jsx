import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import RandomCocktail from './RandomCocktail'

function App() {
  return (
    <>
      <div>
        <img
          src="/images/color_earth.gif"
          alt="A coloured globe of the earth spinning around on its axis"
        />
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/randomcocktail" element={<RandomCocktail />} />
        </Routes>
        <Home />
      </div>
    </>
  )
}

export default App
