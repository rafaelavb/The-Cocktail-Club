import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="main">
        <h2>Browse by...</h2>

        <li>
          <b>
            <Link to={'/alcoholic'}>{'Alcoholic'}</Link>
          </b>
        </li>
        <li>
          <b>
            <Link to={'/non-alcoholic'}>{'Non-Alcoholic'}</Link>
          </b>
        </li>
        <li>
          <b>
            <Link to={'/ingredients'}>{'Ingredients'}</Link>
          </b>
        </li>
        <li>
          <b>
            <Link to={'/glasstype'}>{'Glass Type'}</Link>
          </b>
        </li>
        <li>
          <b>
            <Link to={'/liquortype'}>{'Liquor Type'}</Link>
          </b>
        </li>
        <li>
          <b>
            <Link to={'/randomcocktail'}>{'Random Cocktail'}</Link>
          </b>
        </li>
      </div>
    </>
  )
}

export default Nav
