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
          <h3>Name: {drink.strDrink}</h3>
          <h3>{drink.strAlcoholic}</h3>
          <h3>Glass Type: {drink.strGlass}</h3>
          <h3>Instructions:{drink.strInstructions}</h3>
          <img src={drink.strDrinkThumb} alt={`A "${drink.strDrink}"`} />
        </div>
      ))}
    </ul>
  )
}

export default RandomCocktail
