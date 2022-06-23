const path = require('path')
const express = require('express')

// const cocktailbar = require('./routes/cocktailbar')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.all('*', (req, res) => {
  res.redirect('/')
})

module.exports = server
