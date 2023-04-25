import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  useEffect(() => {
    fetchBooks();
  }, []);

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
