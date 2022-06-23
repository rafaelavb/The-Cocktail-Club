import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

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
