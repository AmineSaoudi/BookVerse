import Book from '../models/books.js'

export const index = async (req, res) => {
    const allBooks = await Book.find();
    res.json(allBooks)
}

export const postBook = async (req, res) => {
    const newBook = new Book({
        title: "Test Book 2",
        author: "Amine"
    })
    await newBook.save();
    res.send("Posting new book")
}

export const showBook = async (req, res) => {
    const { id } = req.params
    const foundBook = await Book.findById(id)
    res.json(foundBook)
}

export const editBook = (req, res) => {
    const { id } = req.params
    res.send(`Editing book with id: ${id}`)
}

export const deleteBook = async (req, res) => {
    const { id } = req.params
    await Book.findByIdAndDelete(id);
    res.json("Book deleted")
}