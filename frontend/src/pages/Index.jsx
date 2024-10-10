import { useEffect, useState } from "react";
import Post from "../components/Book";
import axios from "axios";

export default function index() {
  const [books, setBooks] = useState([]);

  const getPosts = async () => {
    const res = await axios.get("http://localhost:3000/books");
    const fetchedBooks = res.data;
    setBooks(fetchedBooks);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return books.map((book) => (
    <div key={book._id}>
      <h1>{book.author}</h1>
      <h2>{book.title}</h2>
    </div>
  ));
}
