const express = require('express')

const router = express.Router()
const request = require('superagent')

// /api/v1/cocktailbar/
router.get('/', (req, res) => {
  request
    .get('www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => {
      // console.log(response.body)
      res.json(response.body)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('err')
    })
})

router.get('/randomcocktail', (req, res) => {
  request
    .then((response) => {
      // console.log(response.body)
      res.json(response.body)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('err')
    })
})

router.get('/liquortype', (req, res)=> {
  request.then((response) => {
    //consoloe.log(response.body)
    res.json(response.body)
  })
  .catch((err) => {
    console.error(err.message)
    res.status(500).send('err')
  })
})

module.exports = router
