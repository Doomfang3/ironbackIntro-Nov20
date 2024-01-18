const User = require('../models/User.model')

const router = require('express').Router()
// Starting with /api/users
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

module.exports = router
