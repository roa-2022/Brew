const express = require('express')
const path = require('path')

const favouritesRoutes = require('./routes/favourites')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/favourites', favouritesRoutes)
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
