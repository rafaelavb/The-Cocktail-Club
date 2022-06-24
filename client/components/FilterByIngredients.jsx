import React, { useEffect, useState } from 'react'
import { getDrinksByIngredient, getIngredientCategories } from './apiClient'

function FilterByIngredients() {
  /* possible: Object key=ingredient, value = array of possible drink(s) objects for ingredient */
  const [possible, setPossible] = useState(null)
  const [allPossible, setAllPossible] = useState(null)
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

  const getDrinksForIngredients = new Promise((resolve, reject) => {
    const isPossible = {}

    selected.forEach((ingredient) => {
      getDrinksByIngredient(ingredient)
        .then((data) => {
          isPossible[ingredient] = data
        })
        .catch((err) => console.error(err))
      console.log('ingredient')
    })

    console.log('isPossible?', JSON.stringify(isPossible))
    resolve(isPossible)
  })

  useEffect(() => {
    getDrinksForIngredients
      .then((isPossible) => {
        console.log('isPossible', JSON.stringify(isPossible))
        if (Object.keys(isPossible) > 0) {
          console.log('setting possible')
          setPossible(isPossible)
        }
      })
      .catch((err) => console.error(err))
  }, [selected])

  useEffect(() => {
    if (!allPossible) return
    // console.log('possible', possible)
    // console.log('allPossible', allPossible)
    setDrinks(
      allPossible.filter((drink) => {
        let flag = true
        Object.keys(possible).forEach((ingredient) => {
          if (!possible[ingredient].includes(drink)) {
            flag = false
          }
        })
        return flag
      })
    )
  }, [allPossible])

  useEffect(() => {
    if (!possible) return

    // const allPossibleArr = []

    console.log('possible', JSON.stringify(possible))
    console.log('possible["Salt"]', possible['Salt'])
    console.log('possibleKeys', Object.keys(possible))
    console.log('possibleEntries', Object.entries(possible))
    const myPossible = { ...possible }
    console.log('myPossible', myPossible)
    console.log('myPossibleKeys', Object.keys(myPossible))
    console.log('myPossibleEntries', Object.entries(myPossible))

    // selected.forEach((ingredient) => {
    //   console.log('ingredient', ingredient)
    //   console.log('pi', possible[ingredient])
    //   possible[ingredient].forEach((drink) => {
    //     console.log('ing', ingredient, 'drink', drink)
    //     if (!allPossibleArr.includes(drink)) {
    //       allPossibleArr.push(drink)
    //     }
    //   })
    // })

    // console.log('allPossibleArr', allPossibleArr)
    // setAllPossible(allPossibleArr)

    // console.log('allPossible', allPossible)
  }, [possible])

  return (
    <>
      <SelectIngredients />
      {/* {console.log('drinks', drinks)} */}
      {drinks?.map((d) => (
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
