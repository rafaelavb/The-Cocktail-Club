const express = require('express')

const router = express.Router()
const request = require('superagent')

// /api/v1/cocktailbar/
router.get('/', (req, res) => {
  request
    .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => {
      // console.log(response.body)
      res.json(response.body)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('err')
    })
})

module.exports = router
