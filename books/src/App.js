import { useEffect, useContext } from "react";
import BooksContext from "./context/books";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>ReadingList </h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
