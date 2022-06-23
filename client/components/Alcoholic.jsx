import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCocktailApi } from './apiClient'

function Alcoholic() {
  const [drinks, setDrinks] = useState({ loading: true })

  useEffect(() => {
    getCocktailApi()
      .then(data => { setDrinks({ data: data.drinks }) })
      .catch(err => { setDrinks({ error: err.message }) })
  }, [])

  if (drinks.loading) {
    return (<p>Loading...</p>)
  }

  if (drinks.error) {
    return (<p>Sorry! Something went wrong</p>)
  }

  return (
    <ul>
      {drinks.data.map((drink) => <div key={drink.idDrink}>
        <h3>{drink.strDrink}</h3>
        <img src={drink.strDrinkThumb} alt={`the alchoholic drink "${drink.strDrink}"`} />
      </div>)}
    </ul>
  )
}




export default Alcoholic