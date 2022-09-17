import { REQUEST_BEER, RECEIVE_BEER } from '../actions'

function randomBeer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case REQUEST_BEER:
      return null
    case RECEIVE_BEER:
      return payload
    default:
      return state
  }
}

export default randomBeer
