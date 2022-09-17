const express = require('express')
const router = express.Router()
const db = require('../db/favourites')

// GET /api/v1/
router.get('/', async (req, res) => {
  try {
    // res.json()
    const beer = await db.getFavourites()
    res.json(beer)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body
    const beerId = await db.addFavourite(data)
    const getBeer = await db.getFavourite(beerId[0])
    res.json(getBeer)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const beerId = req.params.id
    const res = await db.delFavourite(beerId)
    const beers = db.getFavourites()
    res.json(beers)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
