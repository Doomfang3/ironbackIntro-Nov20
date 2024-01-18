const Book = require('../models/Book.model')

const router = require('express').Router()
// Starting with /api/books
router.get('/', async (req, res) => {
  // Get the books from the DB, using the model
  try {
    const books = await Book.find().populate('createdBy')
    res.status(200).json(books)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error while getting books' })
  }
})

router.get('/:bookId', async (req, res) => {
  try {
    const oneBook = await Book.findById(req.params.bookId)
    res.status(200).json(oneBook)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

// POST
router.post('/', async (req, res) => {
  const currentUserId = '65a9058ba57a0d81ecc1f0b8'
  const payload = req.body
  payload.createdBy = currentUserId
  try {
    const newBook = await Book.create(payload)
    res.status(201).json(newBook)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

// PUT
router.put('/:bookId', async (req, res) => {
  const { bookId } = req.params
  const bookToUpdate = req.body
  try {
    const updatedBook = await Book.findByIdAndUpdate(bookId, bookToUpdate, { new: true })
    res.status(202).json(updatedBook)
  } catch (error) {
    console.log(`Error while trying gto update book with id ${bookId}`, error)
    res
      .status(500)
      .json({ message: 'There was an error on the server while trying to update a book', error })
  }
})
// DELETE

router.delete('/:bookId', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.bookId)
    res.status(204).json({ message: 'Book deleted' })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

module.exports = router
