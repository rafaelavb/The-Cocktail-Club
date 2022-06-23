import React, { useState, useEffect } from 'react'
import { getGinApi, getVodkaApi } from './apiClient'

function LiquorType() {
  const [vodka, setVodka] = useState({ loading: true })
  const [error, setError] = useState({ error: false })
  const [gin, setGin] = useState({ loading: true })
  useEffect(() => {
    getVodkaApi()
      .then(data => {
        setVodka({ data: data.drinks })
        return getGinApi()
      })
      .then(data => {
        setGin({ data: data.drinks })
      })
      .catch(err => {
        setError({ error: err.message })
      })

  }, [])

  if (error.error) {
    return (<p>Sorry! Something went wrong</p>)
  }

  return (
    <ul>
      {vodka.loading ? <p>Loading...</p> : vodka.data.map((drink) =>
        <div key={drink.idDrink}>
          <h3>{drink.strDrink}</h3>
          <img src={drink.strDrinkThumb} alt={`the liquor-type drink "${drink.strDrink}"`} />
        </div>)}
      {gin.loading ? <p>Loading...</p> : gin.data.map((drink) =>
        <div key={drink.idDrink}>
          <h3>{drink.strDrink}</h3>
          <img src={drink.strDrinkThumb} alt={`the liquor-type drink "${drink.strDrink}"`} />
        </div>)}
    </ul>
  )

}

export default LiquorType

//Had 2 sets of code
//I have the second set of api below that is the gin
// getGinApi()
// .then(data => { 
// setGin({ data: data.drinks }) })
// .catch(err => { 
// setGin({ error: err.message }) })