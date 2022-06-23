import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'

import RandomCocktail from './RandomCocktail'
import { getNonAlcoholic } from './apiClient'


function App() {
  return (
    <>

      
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/randomcocktail" element={<RandomCocktail />} />
        </Routes>

      <h1>Welcome to The Cocktail Club</h1>

      {/* This 'main' div is only for styling (so we can use flexbox) */}
      
        <Home />
        <Nav />
        
      </div>
    </>
  )
}

export default App
