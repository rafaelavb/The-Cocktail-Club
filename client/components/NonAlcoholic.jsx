import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getNonAlcoholic } from './apiClient'
import { DrinkDetail } from './DrinkDetail'

function NonAlcoholic() {
  const [drinks, setDrinks] = useState({ loading: true })

  useEffect(() => {
    getNonAlcoholic()
      .then((data) => {
        setDrinks({ data: data.drinks })
      })
      .catch((err) => console.log(err))
  }, [])

  if (drinks.loading) {
    return <p>Loading...</p>
  }

  if (drinks.error) {
    return <p>Sorry! Something went wrong</p>
  }

  return (
    <ul>
      {drinks.data.map((drink) => (
        <div key={drink.idDrink}>
          <Link to={`/drink/${drink.idDrink}`}>
            <h3>{drink.strDrink}</h3>
          </Link>
          <img
            src={drink.strDrinkThumb}
            alt={`non-alchoholic drink "${drink.strDrink}"`}
          />
        </div>
      ))}
    </ul>
  )
}

export default NonAlcoholic
