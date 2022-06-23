import React, { useState, useEffect } from 'react'

import Nav from './Nav'
import Home from './Home'
import { getCocktailApi } from './apiClient'

function App() {
  const [cocktail, setRandomCocktail] = useState(null)

  useEffect(() => {
    getCocktailApi()
      .then((res) => {
        console.log(res)
        setRandomCocktail(res.drinks[0])
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <h1>{cocktail?.strDrink}</h1>
      <div className="title">
        <img
          src="/images/color_earth.gif"
          alt="A coloured globe of the earth spinning around on its axis"
        />
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Nav />
        <Home />
      </div>
    </>
  )
}

export default App
