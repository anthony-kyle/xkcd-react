const path = require('path')
const express = require('express')
const server = express()

const apiRoute = require('./routes/api')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api', apiRoute)

module.exports = server
