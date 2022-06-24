import React from 'react'

function RandomCocktail(props) {
  if (props.cocktail.loading) {
    return <p>Loading...</p>
  }

  if (props.cocktail.error) {
    return <p>Sorry! Something went wrong</p>
  }

  return (
    <ul>
      {props.cocktail.data.map((drink) => (
        <div key={drink.idDrink}>
          <br />
          <img src={drink.strDrinkThumb} alt={`A "${drink.strDrink}"`} />
          <br />
          <b>Name:</b> {drink.strDrink}
          <br />
          {drink.strAlcoholic}
          <br />
          <b>Glass Type:</b> {drink.strGlass}
          <br />
          <b>Instructions:</b> {drink.strInstructions}
        </div>
      ))}
    </ul>
  )
}

export default RandomCocktail
