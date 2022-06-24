import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDrinksByIngredient, getIngredientCategories } from './apiClient'

function FilterByIngredients() {
  /* possible: Object key=ingredient, value = array of possible drink(s) objects for ingredient */
  /* drinks: Array of drink names?/ids? which can be made from selected ingredients */
  const [drinks, setDrinks] = useState([])
  //const [selected, setSelected] = useState([])
  const [selected, setSelected] = useState([
    'Jack Daniels',
    'Johnnie Walker',
    'Jim Beam',
  ]) //testing

  useEffect(() => {
    const allDrinks = Promise.all(
      selected.map((ingredient) => {
        return getDrinksByIngredient(ingredient).then((res) => res.body)
      })
    )

    allDrinks
      .then((data) => {
        // console.log(data)
        // console.log('allDrinks', JSON.stringify(data))
        setDrinks(
          data[0].drinks.filter((drink) => {
            console.log(data[0].drinks)
            console.log(data[1].drinks)
            console.log(data[2].drinks)
            for (let i = 1; i < data.length; i++) {
              for (let j = 0; j < data[i].drinks.length; j++) {
                if (drink.idDrink != data[i].drinks[j].idDrink) {
                  console.log(
                    'a',
                    drink.idDrink,
                    'b',
                    data[i].drinks[j].idDrink
                  )
                  console.log(drink.idDrink != data[i].drinks[j].idDrink)
                  return false
                }
                return true
              }
            }
          })
        )
      })
      .catch((err) => console.error(err))
  }, [selected])

  return (
    <>
      <SelectIngredients />
      <h2>Cocktails you could make:</h2>
      {drinks.map((drink) => (
        <div key={drink.idDrink}>
          <Link to={`/drink/${drink.idDrink}`}>
            <h3>{drink.strDrink}</h3>
          </Link>
          <img
            className="image"
            src={drink.strDrinkThumb}
            alt={`the alchoholic drink "${drink.strDrink}"`}
          />
        </div>
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
