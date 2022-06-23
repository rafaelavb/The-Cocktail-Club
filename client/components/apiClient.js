import request from 'superagent'

const serverURL = 'https://www.thecocktaildb.com/api/json/v1/1/'

export function getCocktailApi() {
  return request
    .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
    .then((response) => response.body)
}

export function getRandomCocktailApi() {
  return request
    .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then((response) => response.body)
}

export function getNonAlcoholic() {
  return request
    .get(`${serverURL}filter.php?a=Non_Alcoholic`).then((response) => response.body)
}

export function getIngredientByName(name) {
  return request
    .get(`${serverURL}search.php?i=${name}`).then((response) => response.body)
}
