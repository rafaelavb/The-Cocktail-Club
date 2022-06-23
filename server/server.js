const path = require('path')
const express = require('express')

// const cocktailbar = require('./routes/cocktailbar')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
