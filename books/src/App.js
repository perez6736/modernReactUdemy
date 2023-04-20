import { useState } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    console.log(response.data);
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookByID = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const changeBookTitleByID = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>ReadingList </h1>
      <BookList
        books={books}
        onDelete={deleteBookByID}
        onEdit={changeBookTitleByID}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
