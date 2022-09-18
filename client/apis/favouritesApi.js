import request from 'superagent'

export async function getFavouritesApi() {
  const res = await request.get('/api/v1/favourites')
  return res.body
}

export async function addFavouriteApi(beer) {
  const res = await request.post('/api/v1/favourites').send(beer)
  return res.body
}

export async function editFavouriteApi(beer) {
  const res = await request.patch('/api/v1/favourites').send(beer)
  return res.body
}

export async function delFavouriteApi(id) {
  const res = await request.delete('/api/v1/favourites/' + id)
  return res.body
}
