const express = require("express");
const app = express();
const booksRoutes = require('./routes/books')

const port = 3000;

app.use('/books', booksRoutes)

app.get('/', (req, res) => {
    res.send("HOME")
})


app.listen(port, (req, res) => {
    console.log(`Listening on ${port}`)
})