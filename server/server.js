const path = require('path')
const express = require('express')
const server = express()

const apiRoute = require('./routes/api')

server.use(express.json())
server.use(express.static(path.join(__dirname, './xkcd-react/public')))

server.use('/api', apiRoute)

server.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, './xkcd-react/public/index.html'));
});


module.exports = server
