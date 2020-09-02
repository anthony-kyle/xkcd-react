import React from 'react'

import Xkcd from './Xkcd'

const App = () => {
  const fruit = Math.random() > 0.5 ?[{name: 'apple'},{name: 'banana'},{name: 'grape'},{name: 'cherry'},{name: 'plum'},{name: 'mango'},] : []
  return (
    <Xkcd />
  )
}

export default App