import React, { useState, useEffect } from 'react'
import { getIngredientByName } from './apiClient'

// dummy props
const ingredientsArr = ['Tequila', 'Triple sec', 'Lime juice', 'Salt']

function Ingredient(props) {
  const { name } = props
  const [details, setDetails] = useState({ loading: true })
  const [showDesc, setShowDesc] = useState(false)

  useEffect(() => {
    getIngredientByName(name)
      .then((data) => {
        setDetails({ data: data.ingredients[0] })
      })
      .catch((err) => {
        setDetails({ error: err.message })
      })
  }, [])

  const handleClick = (evt) => {
    setShowDesc((prev) => !prev)
  }

  if (details.loading) {
    return <p>Loading...</p>
  }

  if (details.error) {
    return <p>Something went wrong</p>
  }

  return (
    <div>
      {console.log(details)}
      <h3>{details.data.strIngredient}</h3>
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${name.toLowerCase()}-Medium.png`}
        alt={`${name} thumbnail`}
      />
      <p>Type: {details.data.strType}</p>
      <p>Alcoholic: {details.data.strAlcohol}</p>
      {details.data.strDescription && (
        <button onClick={handleClick}>Description</button>
      )}
      {showDesc && <p>{details.data.strDescription}</p>}
    </div>
  )
}

function Ingredients(props) {
  // const {ingredientsArr} = props

  return (
    <ul>
      {ingredientsArr.map((ingredient) => (
        <Ingredient key={ingredient} name={ingredient} />
      ))}
    </ul>
  )
}

export default Ingredients
