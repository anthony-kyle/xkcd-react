import request from 'superagent'

const baseUrl = 'https://xkcd.now.sh/'

export function getCurrentComic(){
  return request
    .get(baseUrl + '?comic=latest')
    .then(response => response.body)
    .catch(err => err)
}

export function getComicById(id){
  return request
    .get(baseUrl + '?comic=' + id)
    .then(response => response.body)
    .catch(err => err)
}