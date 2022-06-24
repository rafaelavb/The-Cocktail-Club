import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { getGlassType } from './apiClient'

function GlassFlute(props) {
  const { name } = props
  const [details, setDetails] = useState({ loading: true })

  useEffect(() => {
    getGlassType(name)
      .then((data) => {
        console.log(data)
        setDetails({ data: data.drinks })
      })
      .catch((err) => {
        setDetails({ error: err.message })
      })
  }, [])
  {
    console.log(details)
  }
  return (
    <>
      <div>Hey</div>
    </>
  )
}

export default GlassFlute
