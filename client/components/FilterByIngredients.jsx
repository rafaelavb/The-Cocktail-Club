import React, { useEffect, useState } from 'react'
import { getIngredientCategories } from './apiClient'

function FilterByIngredients() {
  const [selected, setSelected] = useState([])

  return (
    <>
      <h2>Select your ingredients</h2>
      <SelectIngredients />
    </>
  )
}

function SelectIngredients() {
  const [options, setOptions] = useState({ loading: true })

  useEffect(() => {
    getIngredientCategories()
      .then((data) => {
        setOptions({ data: data.drinks })
      })
      .catch((err) => {
        setOptions({ error: err.message })
      })
  }, [])

  if (options.loading) {
    return <p>Loading ingredients...</p>
  }

  if (options.error) {
    return <p>Something went wrong when loading the ingredients</p>
  }

  return (
    <ul>
      {options.data.map((ingredient) => (
        <div key={ingredient.strIngredient1}>{ingredient.strIngredient1}</div>
      ))}
    </ul>
  )
}

export default FilterByIngredients
