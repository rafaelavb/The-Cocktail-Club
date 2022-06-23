const path = require('path')
const express = require('express')

const cocktailbar = require('./routes/cocktailbar')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/cocktailbar', cocktailbar)

module.exports = server
