import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getDetailbyId } from './apiClient'

function DrinkDetail() {
  const [drinks, setDrinks] = useState({ loading: true })
  const { idDrink } = useParams()

  useEffect(() => {
    getDetailbyId(idDrink)
      .then((data) => {
        console.log(data)
        setDrinks({ data: data.drinks[0] })
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
      <div>
        <h3>{drinks.data.strDrink}</h3>
        <p>Alcohol Type: {drinks.data.strAlcoholic}</p>
        <p>Glass Type: {drinks.data.strGlass}</p>
        <div>
          Ingredients:
          <p>
            {drinks.data.strIngredient1},{drinks.data.strIngredient2},
            {drinks.data.strIngredient3},{drinks.data.strIngredient4}
          </p>
        </div>
        <p>Instructions: {drinks.data.strInstructions}</p>
        <img
          src={drinks.data.strDrinkThumb}
          alt={`the drink "${drinks.data.strDrink}"`}
        ></img>
      </div>
    </ul>
  )
}

export default DrinkDetail
