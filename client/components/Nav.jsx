import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <h2>Browse by...</h2>
      <ul>
        <li>
          <Link to={'/allcocktails'}>{All Cocktails}</Link>
        </li>
        <li>
          <Link to={'/alcoholic'}>{Alcoholic}</Link>
        </li>    
        <li>
          <Link to={'/non-alcoholic'}>{Non-Alcoholic}</Link></li>
        <li>
          <Link to={'/ingredients'}>{Ingredients}</Link>
        </li>
        <li>
          <Link to={'/glasstype'}>{Glass Type}</Link>
        </li>
        <li>
          <Link to={'/liquortype'}>{Liquor Type}</Link>
        </li>
        <li>
          <Link to={'/randomcocktail'}>{Random Cocktail}</Link>
        </li>
      </ul>
    </div>
  )
}


export default Nav
