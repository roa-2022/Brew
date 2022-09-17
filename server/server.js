const express = require('express')
const path = require('path')

const favouritesRoutes = require('./routes/favourites')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/favourites', favouritesRoutes)

module.exports = server
