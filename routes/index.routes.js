const router = require('express').Router()
// Starting with /api
router.get('/', (req, res) => {
  res.json('All good in here')
})

const booksRouter = require('./books.routes')
router.use('/books', booksRouter)

const usersRouter = require('./users.routes')
router.use('/users', usersRouter)

module.exports = router
