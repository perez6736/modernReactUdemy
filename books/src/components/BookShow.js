import { useContext, useState } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookByID } = useContext(BooksContext);

  const handleDeleteClick = () => {
    deleteBookByID(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const onSubmit = (id, newTitle) => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={onSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/150/100`} />
      <div>{content} </div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
