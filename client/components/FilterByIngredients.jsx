import React, { useEffect, useState } from 'react'
import { getDrinksByIngredient, getIngredientCategories } from './apiClient'

function FilterByIngredients() {
  /* possible: Object key=ingredient, value = array of possible drink(s) objects for ingredient */
  const [possible, setPossible] = useState({})
  /* drinks: Array of drink names?/ids? which can be made from selected ingredients */
  const [drinks, setDrinks] = useState([])
  //const [selected, setSelected] = useState([])
  const [selected, setSelected] = useState([
    'Tequila',
    'Triple sec',
    'Lime juice',
    'Salt',
  ]) //testing

  // delete this after testing
  // useEffect(() => {
  //   setSelected([...selected])
  // })

  useEffect(() => {
    selected.map((ingredient) => {
      getDrinksByIngredient(ingredient)
        .then((data) => {
          // console.log('data', data)
          // console.log('ing', ingredient)
          // console.log('data.drinks', data.drinks)
          setPossible((prev) => ({ ...prev, [ingredient]: data.drinks }))
        })
        .catch((err) => {
          console.error(err)
        })
    })
  }, [selected])

  useEffect(() => {
    // console.log('possible', possible)
    // console.log('allPossibleDrinks', allPossibleDrinks())
    setDrinks(
      allPossibleDrinks().filter((drink) => {
        let flag = true
        Object.keys(possible).forEach((ingredient) => {
          if (!possible[ingredient].includes(drink)) {
            flag = false
          }
        })
        return flag
      })
    )
  }, [possible])

  const allPossibleDrinks = () => {
    const allPossible = []
    // console.log('possible', possible)

    Object.keys(possible).forEach((ingredient) => {
      Object.values(possible[ingredient]).forEach((drink) => {
        // console.log('ing', ingredient, 'drink', drink)
        if (!allPossible.includes(drink)) {
          allPossible.push(drink)
        }
      })
    })

    // console.log('allPossible', allPossible)
    return allPossible
  }
  return (
    <>
      <SelectIngredients />
      {console.log('drinks', drinks)}
      {drinks.map((d) => (
        <p key={d.idDrink}>{d.strDrink}</p>
      ))}
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
    <fieldset>
      <legend>Select your ingredients:</legend>
      {options.data.map((ingredient) => (
        <div key={ingredient.strIngredient1}>
          <input type="checkbox" name={ingredient.strIngredient1} />
          <label htmlFor={ingredient.strIngredient1}>
            {ingredient.strIngredient1}
          </label>
        </div>
      ))}
    </fieldset>
  )
}

export default FilterByIngredients
