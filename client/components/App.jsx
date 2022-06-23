import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import LiquorType from './LiquorType'
import Alcoholic from './Alcoholic'
import NonAlcoholic from './NonAlcoholic'
import Ingredients from './Ingredients'
import RandomCocktail from './RandomCocktail'
import PageNotFound from './PageNotFound'
import DrinkDetail from './DrinkDetail'

function App() {
  return (
    <>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <h1>Welcome to The Cocktail Club</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/randomcocktail" element={<RandomCocktail />} />
          <Route path="/alcoholic" element={<Alcoholic />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/non-alcoholic" element={<NonAlcoholic />} />
          <Route path="/liquortype" element={<LiquorType />} />
          <Route path="/drink/:idDrink" element={<DrinkDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
