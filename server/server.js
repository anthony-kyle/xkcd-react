const path = require('path')
const express = require('express')
const server = express()

const apiRoute = require('./routes/api')

server.use(express.json())
server.use('/xkcd-react/',express.static(path.join(__dirname, './public')))

server.use('/xkcd-react/api', apiRoute)

server.get('/xkcd-react/*', (req,res) =>{
  res.sendFile(path.join(__dirname, './public/index.html'));
});


module.exports = server
