import express from "express"
const app = express();
import booksRoutes from './routes/books.js'
import mongoose from 'mongoose'

// brew services start mongodb/brew/mongodb-community@7.0
// brew services stop mongodb/brew/mongodb-community@7.0

mongoose.connect('mongodb://127.0.0.1:27017/bookverse')

const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Database connected");
});


const port = 3000;

app.use('/books', booksRoutes)

app.get('/', (req, res) => {
    res.send("HOME")
})


app.listen(port, (req, res) => {
    console.log(`Listening on ${port}`)
})