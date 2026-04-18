import { parseTranscript } from '@/lib/xkcd'

describe('parseTranscript', () => {
  it('extracts title from transcript markers', () => {
    const input = {
      transcript: '{{Title text: Hello}}Line one\nLine two',
    }
    const out = parseTranscript({ ...input })
    expect(out.trnsTitle).toBe(' Hello')
    expect(out.transcript).not.toContain('{{Title text:')
  })
})
