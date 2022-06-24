import React, { useState, useEffect } from 'react'
import { getGlassType } from './apiClient'
import { Link } from 'react-router-dom'

function GlassType() {
  return (
    <div>
      <h3>
        <Link to={'/Glass'}>{'Cocktail Glass'}</Link>
      </h3>
      <img src={`./images/cocktail_glass.jpg`} alt={`thumbnail`} />

      <h3>
        <Link to={'/Glass'}>{'Champagne Flute'}</Link>
      </h3>
      <img src={`./images/flute.jpg`} alt={`thumbnail`} />
    </div>
  )
}

export default GlassType
