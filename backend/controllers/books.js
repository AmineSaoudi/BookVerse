module.exports.index = (req, res) => {
    res.send("All Books")
}

module.exports.postBook = (req, res) => {
    res.send("Posting new book")
}

module.exports.showBook = (req, res) => {
    const { id } = req.params
    res.send(`Seeing specific book with id: ${id}`)
}

module.exports.editBook = (req, res) => {
    const { id } = req.params
    res.send(`Editing book with id: ${id}`)
}

module.exports.deleteBook = (req, res) => {
    const { id } = req.params
    res.send(`Deleting book with id: ${id}`)
}