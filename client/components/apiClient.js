import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

export function getCocktailApi() {
  return request
    .get(`${serverURL}/cocktailbar`)
    .then((response) => response.body)
}
