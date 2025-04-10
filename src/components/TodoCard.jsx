import moment from "moment";

function BookCard(props) {
  const { book, onDelete, onUpdate } = props;
  const handleDelete = () => {
    onDelete(book.id);
  };
  const handleUpdateBook = (id, done) => {
    onUpdate(id, done);
  };
  return (
    <div
      className={`p-4 m-3 bg-[#5C8374] rounded-lg text-white ${
        book.done ? "opacity-60" : ""
      }`}
    >
      <p className="font-bold">{book.bookName}</p>
      <p className="font-bold">{book.authorName}</p>
      <p className="italic font-medium">
        Created at: {moment.unix(book.created_at).fromNow()}
      </p>
      <div>
        <label className="flex items-center cursor-pointer gap-2">
          Done
          <input
            onChange={(e) => handleUpdateBook(book.id, e.target.checked)}
            type="checkbox"
          />
          {book.done}
        </label>
      </div>
      <button
        onClick={handleDelete}
        className="mt-1 px-3 py-1 cursor-pointer rounded-lg bg-[#750E21]"
      >
        Delete
      </button>
    </div>
  );
}
export default BookCard;