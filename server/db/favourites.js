const conn = require('./connection')

function getFavourites(db = conn) {
  return db('favourites').select()
}

function addFavourite(favourite, db = conn) {
  return db('favourites').insert(favourite)
}

function getFavourite(id, db = conn) {
  return db('favourites').select().where('id', id).first()
}

function editFavourite(favourite, db = conn) {
  return db('favourites').where('id', favourite.id).update(favourite)
}

function delFavourite(id, db = conn) {
  return db('favourites').del().where('id', id)
}

module.exports = {
  getFavourites,
  addFavourite,
  getFavourite,
  editFavourite,
  delFavourite,
}
