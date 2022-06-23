import React, { useState, useEffect } from 'react'
import { getGlassType } from './apiClient'

function Glass(props) {
  const { name } = props
  const [details, setDetails] = useState({ loading: true })
  const [showType, setShowType] = useState(false)

  useEffect(() => {
    getGlassType(name)
      .then((data) => {
        setDetails({ data: data.drinks })
      })
      .catch((err) => {
        setDetails({ error: err.message })
      })
  }, [])

  const handleClick = (evt) => {
    setShowType((prev) => !prev)
  }

  if (details.loading) {
    return <p>Loading GlassType...</p>
  }

  if (details.error) {
    console.log(details.error)
    return <p>Oops something went wrong</p>
  }

  return (
    <div>
      {console.log(details)}
      <h3>Cocktail Glass</h3>
      <img src={`./images/cocktail_glass.jpg`} alt={`thumbnail`} />

      <h3>Champagne Flute</h3>
      <img src={`./images/flute.jpg`} alt={`thumbnail`} />

      {details.data.strDescription && (
        <button onClick={handleClick}>Description</button>
      )}
      {showType && <p>{details.data.strDescription}</p>}
    </div>
  )
}

const glassesArr = ['Cocktail_glass', 'Champagne_flute']

function Glasses(props) {
  return (
    <ul>
      {glassesArr.map((glass) => (
        <Glass key={glass} name={glass} />
      ))}
    </ul>
  )
}

export default Glasses
