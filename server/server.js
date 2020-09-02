const path = require('path')
const express = require('express')
const cors = require('cors')
const server = express()

server.use(express.json())
server.use(cors({origin: 'xkcd.now.sh'}))
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
