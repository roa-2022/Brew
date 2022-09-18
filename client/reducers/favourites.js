import {
  SHOW_FAVOURITES,
  SAVE_FAVOURITE,
  DEL_FAVOURITE,
  EDIT_FAVOURITES,
} from '../actions'

function favourites(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SHOW_FAVOURITES:
      return payload
    case SAVE_FAVOURITE:
      return [...state, payload]
    case DEL_FAVOURITE:
      return state.filter((beer) => !beer.brewdog_id === payload.brewdog_id)
    case EDIT_FAVOURITES:
      // TODO edit the state
      return state
    default:
      return state
  }
}

export default favourites
