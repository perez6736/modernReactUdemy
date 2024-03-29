import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    console.log(response.data);
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookByID = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const changeBookTitleByID = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }; //update with the entire response data - so it gets most up to date book data.
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books: books,
    deleteBookByID,
    changeBookTitleByID,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;

// to import both
// import BooksContext, { Provider } from ....

//to import only provider
//import  { Provider } from ....

// to import Context
// import BooksContext from ....
