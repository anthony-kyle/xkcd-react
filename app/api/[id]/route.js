import { NextResponse } from 'next/server'

export async function GET(request, context) {
  const { id } = await context.params
  const urlPart = id !== 'latest' ? `/${id}` : ''
  const url = `https://xkcd.com${urlPart}/info.0.json`

  try {
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) {
      return NextResponse.json(
        { error: res.statusText || 'Upstream error' },
        { status: res.status }
      )
    }
    const body = await res.json()
    return NextResponse.json(body)
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
