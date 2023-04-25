import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { changeBookTitleByID } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    changeBookTitleByID(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label> Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary"> Save </button>
    </form>
  );
}

export default BookEdit;
