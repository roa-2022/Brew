const express = require('express')
const router = express.Router()
const db = require('../db/favourites')

// GET /api/v1/
router.get('/', async (req, res) => {
  try {
    const result = await db.getFavourites()
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const result = await db.getFavourite(req.params.id)
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const result = await db.addFavourite(req.body)
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const result = await db.editFavourite(req.params.id, req.body)
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const result = await db.delFavourite(req.params.id)
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
