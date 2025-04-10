import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BookCard from "./TodoCard";
import moment from "moment";
function BookList() {
  const [books, setBooks] = useState(undefined);
  const [nameValue, setNameValue] = useState("");
  const [authorValue, setAuthorValue] = useState("");
  
  

  useEffect(() => {
    const savedBooks = localStorage.getItem("books");
    if (savedBooks == null) {
      localStorage.setItem("book", "[]");
    } else {
      setBooks(JSON.parse(savedBooks));
    }
  }, []);

  useEffect(() => {
    if (books) {
      localStorage.setItem("books", JSON.stringify(books));
    }
  }, [books]);

  const handleCreateBook = () => {
    const id = uuidv4();
    const created_at = moment().unix();
    setBooks((prev) => {
      if (prev) {
        return [
          {
            id: id,
            bookName: nameValue,
            authorName: authorValue,
            done: false,
            created_at: created_at,
          },
          ...prev,
        ];
      } else {
        return [
          {
            id: id,
            bookName: nameValue,
            authorName: authorValue,
            done: false,
            created_at: created_at,
          },
        ];
      }
    });
    setNameValue("");
    setAuthorValue("");
  };
  const handleDeleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };
  const handleUpdateBook = (id, done) => {
    setBooks((prev) =>
      prev.map((book) => {
        if (book.id == id) {
          return { ...book, done: done };
        } else {
          return book;
        }
      })
    );
  };

  return (
    <section className="flex-1 p-2">
      <div className="pt-[35px] bg-[#1B4242] rounded-br-[45px] p-3 rounded-bl-[45px]">
        <h2 className="text-white font-bold mb-2">Create Book</h2>
        <div className="flex gap-2 mx-2">
          <input
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            type="text"
            placeholder="Book Name"
            className="h-[30px] rounded-2xl p-2 w-full outline-none"
          />
          <input
            value={authorValue}
            onChange={(e) => setAuthorValue(e.target.value)}
            type="text"
            placeholder="Author Name"
            className="h-[30px] rounded-2xl p-2 w-[300px] outline-none"
          />
          <button
            onClick={handleCreateBook}
            className="cursor-pointer h-[30px] rounded-2xl p-2 2-[150px] bg-[#5C8374] text-white items-center flex"
          >
            Create
          </button>
        </div>
      </div>
      {books && books.length > 0 ? (
        <div>
          <h2 className="font-bold text-center text-xl">Books</h2>
          <div>
            {books.map((book) => (
              <BookCard
                checked={book.done}
                onUpdate={handleUpdateBook}
                onDelete={handleDeleteBook}
                book={book}
                key={book.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <h2 className="font-bold text-center text-xl">there is no book!!</h2>
      )}
    </section>
  );
}
export default BookList;
