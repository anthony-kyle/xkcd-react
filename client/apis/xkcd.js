import request from 'superagent'

const baseUrl = '/api/'

export function getCurrentComic(){
  return request
    .get(baseUrl + 'latest')
    .then(response => {
      return parseTranscript(response.body)
    })
    .catch(err => err)
}

export function getComicById(id){
  return request
    .get(baseUrl + id)
    .then(response => {
      return parseTranscript(response.body)
    })
    .catch(err => err)
}

function parseTranscript(obj){
  console.log(obj)
  if (obj.transcript){
    const titleStart = obj.transcript.indexOf('{{')
    const titleEnd = obj.transcript.indexOf('}}') + 2
    let title = ''
    if (titleStart > -1 && titleEnd > -1){ title = obj.transcript.substring(titleStart, titleEnd)}
    if (title !== '') {
      obj.transcript = obj.transcript.replace(title, '')
      title = title.replace('{{Title text:', '')
      title = title.replace('{{Alt:', '')
      title = title.replace('{{Alt-title:', '')
      title = title.replace('{{', '')
      title = title.replace('}}', '')
      obj.trnsTitle = title
    }
  }
  return obj
}