const express = require("express");
const router = express.Router();
const request = require('superagent')

router.get('/:id', (req,res)=>{
  const id = req.params.id
  const urlPart = (id !== 'latest' ? `/${id}` : '')
  const url = `https://xkcd.com${urlPart}/info.0.json`
  return request.get(url)
    .then(response => {
      return res.json(response.body)
    })
    .catch(err =>{
      return res.json(err.message)
    })
})

module.exports = router