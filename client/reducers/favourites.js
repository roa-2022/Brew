import { SHOW_FAVOURITES, SAVE_FAVOURITE, DEL_FAVOURITE } from '../actions'

function favourites(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SHOW_FAVOURITES:
      return payload
    case SAVE_FAVOURITE:
      return [...state, payload]
    case DEL_FAVOURITE:
      console.log('Favourites reducer says deleting', payload.brewdog_id)
      return state.filter((beer) => !beer.brewdog_id === payload.brewdog_id)
    default:
      return state
  }
}

export default favourites
