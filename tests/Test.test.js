import React from 'react'
import {shallow} from 'enzyme'

import Test from '../client/components/Test'

test('<Fruit />', () => {
  const expected = 'No Fruit'
  const fruit = []

  const wrapper = shallow(<Test fruit={fruit} />)
  const actual = wrapper.find('p.nf').text()

  expect(actual).toEqual(expected)
})

test('<Fruit />', () => {
  const expected = 'apple'
  const expectedLength = 2;
  const fruit = [{name: 'apple'}, {name: 'banana'}]

  const wrapper = shallow(<Test fruit={fruit} />)
  const actual = wrapper.find('p.f:first-child').text()
  const actualLength = wrapper.find('p.f').length

  expect(actual).toEqual(expected)
  expect(actualLength).toEqual(expectedLength)
})