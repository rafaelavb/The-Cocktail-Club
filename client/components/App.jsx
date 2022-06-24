import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getRandomCocktailApi } from './apiClient'

import Nav from './Nav'
import Home from './Home'
import LiquorType from './LiquorType'
import Alcoholic from './Alcoholic'
import NonAlcoholic from './NonAlcoholic'
import Ingredients from './Ingredients'
import RandomCocktail from './RandomCocktail'
import PageNotFound from './PageNotFound'
import DrinkDetail from './DrinkDetail'
import GlassType from './GlassType'
import GlassCocktail from './GlassCocktail'
import GlassFlute from './GlassFlute'

function App() {
  const [cocktail, setCocktail] = useState({ loading: true })
  useEffect(() => {
    getRandomCocktail()
  }, [])

  const getRandomCocktail = () => {
    getRandomCocktailApi()
      .then((data) => {
        console.log(data, `im the data`)
        setCocktail({ data: data.drinks })
      })
      .catch((err) => {
        console.log(err.message)
        setCocktail({ error: err.message })
      })
  }

  return (
    <>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <h1>Welcome to The Cocktail Club</h1>
        <Nav fetchCocktail={getRandomCocktail} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/randomcocktail"
            element={<RandomCocktail cocktail={cocktail} />}
          />
          <Route path="/alcoholic" element={<Alcoholic />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/non-alcoholic" element={<NonAlcoholic />} />
          <Route path="/glasstype" element={<GlassType />} />
          <Route path="/GlassCocktail" element={<GlassCocktail />} />
          <Route path="/GlassFlute" element={<GlassFlute />} />
          <Route path="/liquortype" element={<LiquorType />} />
          <Route path="/drink/:idDrink" element={<DrinkDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
