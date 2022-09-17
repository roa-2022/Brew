import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import App from './App'
import store from '../store'
import { fetchFavourites } from '../actions'

jest.mock('../actions')

fetchFavourites.mockImplementation(() => () => {})

test('page header includes favourites', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toMatch(/Favourites/)
})

test('renders an <li> for each favourite', () => {
  const favourites = ['orange', 'persimmons', 'kiwi fruit']
  jest.spyOn(store, 'getState')
  store.getState.mockImplementation(() => ({ favourites }))

  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const li = screen.getAllByRole('listitem')
  expect(li).toHaveLength(3)
})

test('dispatches fetchFavourites action', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(fetchFavourites).toHaveBeenCalled()
})
