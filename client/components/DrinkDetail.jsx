import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getDetailbyId } from './apiClient'

function DrinkDetail() {
  const [drinks, setDrinks] = useState({ loading: true })
  const { idDrink } = useParams()

  useEffect(() => {
    getDetailbyId(idDrink)
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
      <div>
        <h3>{drinks.data.strDrink}</h3>
        <p>{drinks.data.strAlcoholic}</p>
        <p>{drinks.data.strGlass}</p>
        <p>{drinks.data.strIngredient1}</p>
        <p>{drinks.data.strIngredient2}</p>
        <p>{drinks.data.strIngredient3}</p>
        <p>{drinks.data.strIngredient4}</p>
        <p>{drinks.data.Instructions}</p>
      </div>
    </ul>
  )
}

export default DrinkDetail
