import React, { useState, useEffect } from 'react'
import { getGinApi, getVodkaApi } from './apiClient'
import { Link } from 'react-router-dom'

function LiquorType() {
  const [vodka, setVodka] = useState({ loading: true })
  const [error, setError] = useState({ error: false })
  const [gin, setGin] = useState({ loading: true })
  const [showVodka, setShowVodka] = useState(false)
  const [showGin, setShowGin] = useState(false)

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

  const handleVodkaClick = (evt) => {
    setShowVodka((prev) => !prev)
  }

  const handleGinClick = (evt) => {
    setShowGin((prev) => !prev)
  }

  if (error.error) {
    return (<p>Sorry! Something went wrong</p>)
  }

  return (
    <ul>
      <button onClick={handleVodkaClick}>Vodka</button>
      {showVodka && (
        vodka.loading ? <p>Loading...</p> : vodka.data.map((drink) =>
          <div key={drink.idDrink}>
            <Link to={`/drink/${drink.idDrink}`}>
              <h3>{drink.strDrink}</h3>
            </Link>
            <img src={drink.strDrinkThumb} alt={`the liquor-type drink "${drink.strDrink}"`} />


          </div>))}
      <button onClick={handleGinClick}>Gin</button>
      {showGin && (
        gin.loading ? <p>Loading...</p> : gin.data.map((drink) =>
          <div key={drink.idDrink}>
            <Link to={`/drink/${drink.idDrink}`}>
              <h3>{drink.strDrink}</h3>
            </Link>
            <img src={drink.strDrinkThumb} alt={`the liquor-type drink "${drink.strDrink}"`} />
          </div>))}
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