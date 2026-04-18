import { render, screen } from '@testing-library/react'

import Test from '@/components/Test'

describe('Test', () => {
  it('shows No Fruit when empty', () => {
    render(<Test fruit={[]} />)
    expect(screen.getByText('No Fruit')).toBeInTheDocument()
  })

  it('lists fruit', () => {
    const fruit = [{ name: 'apple' }, { name: 'banana' }]
    render(<Test fruit={fruit} />)
    expect(screen.getByText('apple')).toBeInTheDocument()
    expect(screen.getAllByRole('paragraph')).toHaveLength(2)
  })
})
