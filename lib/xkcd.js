const API_BASE = '/xkcd-react/api'

export function parseTranscript(obj) {
  if (obj.transcript) {
    const titleStart = obj.transcript.indexOf('{{')
    const titleEnd = obj.transcript.indexOf('}}') + 2
    let title = ''
    if (titleStart > -1 && titleEnd > -1) {
      title = obj.transcript.substring(titleStart, titleEnd)
    }
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

export async function getCurrentComic() {
  const res = await fetch(`${API_BASE}/latest`, { cache: 'no-store' })
  const body = await res.json()
  if (!res.ok) {
    throw new Error(body.error || res.statusText)
  }
  return parseTranscript(body)
}

export async function getComicById(id) {
  const res = await fetch(`${API_BASE}/${id}`, { cache: 'no-store' })
  const body = await res.json()
  if (!res.ok) {
    throw new Error(body.error || res.statusText)
  }
  return parseTranscript(body)
}
