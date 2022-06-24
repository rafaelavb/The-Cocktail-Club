import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
  const handleLinkClick = () => {
    props.fetchCocktail()
  }

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
            <Link to={'/ingredients-filter'}>{'Filter by Ingredients'}</Link>
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
            <Link onClick={() => handleLinkClick()} to={'/randomcocktail'}>
              {'Random Cocktail'}
            </Link>
          </b>
        </li>
      </div>
    </>
  )
}

export default Nav
