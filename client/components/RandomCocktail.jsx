import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { getRandomCocktailApi } from './apiClient'

function RandomCocktail() {
  const [cocktail, setCocktail] = useState({ loading: true })

  useEffect(() => {
    getRandomCocktailApi()
      .then((data) => {
        setCocktail({ data: data.drinks })
      })
      .catch((err) => {
        console.log(err.message)
        setCocktail({ error: err.message })
      })
  }, [])

  if (cocktail.loading) {
    return <p>Loading...</p>
  }

  if (cocktail.error) {
    return <p>Sorry! Something went wrong</p>
  }

  return (
    <ul>
      {cocktail.data.map((drink) => (
        <div key={drink.idDrink}>
          <h3>Name: {drink.strDrink}</h3>
          <h3>{drink.strAlcoholic}</h3>
          <h3>Glass Type: {drink.strGlass}</h3>
          <h3>Instructions:{drink.strInstructions}</h3>
          <img src={drink.strDrinkThumb} alt={`A "${drink.strDrink}"`} />
        </div>
      ))}
    </ul>
  )
}

export default RandomCocktail
