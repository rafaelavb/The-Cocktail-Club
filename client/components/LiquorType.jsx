import React, { useState, useEffect } from 'react'
import { getGinApi, getVodkaApi } from './apiClient'

function LiquorType() {
  const [vodka, setVodka] = useState({ loading:true})
  const [gin, setGin] = useState({ loading:true })
  useEffect(() => {
    getVodkaApi()
      .then(data => { 
      setVodka({ data: data.drinks }) })
      .catch(err => { 
      setVodka({ error: err.message }) })
    
    getGinApi()
    .then(data => { 
    setGin({ data: data.drinks }) })
    .catch(err => { 
    setGin({ error: err.message }) })
  }, [])

  if (drinks.loading) {
    return (<p>Loading...</p>)
  }

  if (drinks.error) {
    return (<p>Sorry! Something went wrong</p>)
  }

  return (
    <ul>
      {drinks.data.map((drink) => 
      <div key={drink.idDrink}>
        <h3>{drink.strDrink}</h3>
        <img src={drink.strDrinkThumb} alt={`the liquor-type drink "${drink.strDrink}"`} />
      </div>)}
    </ul>
  )

}

export default LiquorType