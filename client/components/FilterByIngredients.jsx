import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getDrinksByIngredient, getIngredientCategories } from './apiClient'

function FilterByIngredients() {
  const [drinks, setDrinks] = useState([])
  const [selected, setSelected] = useState([])
  // const [selected, setSelected] = useState([
  //   'Jack Daniels',
  //   'Johnnie Walker',
  //   'Jim Beam',
  // ]) //testing

  useEffect(() => {
    if (selected.length < 1) return
    const allDrinks = Promise.all(
      selected.map((ingredient) => {
        return getDrinksByIngredient(ingredient).then((res) => res.body)
      })
    )

    allDrinks
      .then((data) => {
        setDrinks(
          data[0].drinks.filter((drink) => {
            for (let i = 1; i < data.length; i++) {
              for (let j = 0; j < data[i].drinks.length; j++) {
                if (drink.idDrink != data[i].drinks[j].idDrink) {
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

  const handleSelected = (usrSelected) => {
    setSelected((prev) => [...prev, usrSelected])
  }

  return (
    <>
      <SelectIngredients onSelection={handleSelected} />
      <h3>Your selection:</h3>
      <ul>
        {selected?.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
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

function SelectIngredients(props) {
  const { onSelection } = props
  const [options, setOptions] = useState({ loading: true })
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    getIngredientCategories()
      .then((data) => {
        setOptions({
          data: data.drinks.sort((a, b) =>
            a.strIngredient1.localeCompare(b.strIngredient1)
          ),
        })
        setCurrent(data.drinks[0].strIngredient1)
      })
      .catch((err) => {
        setOptions({ error: err.message })
      })
  }, [])

  const handleClick = (evt) => {
    console.log('Adding ' + current)
    onSelection(current)
  }

  const handleChange = (evt) => {
    console.log(evt.target.value)
    setCurrent(evt.target.value)
  }

  if (options.loading) {
    return <p>Loading ingredients...</p>
  }

  if (options.error) {
    return <p>Something went wrong when loading the ingredients</p>
  }

  return (
    <>
      <label htmlFor="ingredients">Select your ingredients:</label>
      <select name="ingredients" id="ingredients" onChange={handleChange}>
        {options.data.map((ingredient) => (
          <option
            key={ingredient.strIngredient1}
            value={ingredient.strIngredient1}
          >
            {ingredient.strIngredient1}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Add</button>
    </>
  )
}

export default FilterByIngredients
