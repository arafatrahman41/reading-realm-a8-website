import { useEffect, useState } from "react";
import { getBooks } from "../utils";
import ReadBook from "./ReadBook";

const ReadBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const storedBooks = getBooks();
        setBooks(storedBooks)
    }, [])
  return (
    <div>
      <ul className="mt-8 space-y-6 pb-24">
        {books.map((book) => (
          <ReadBook key={book.id} book={book}></ReadBook>
        ))}
      </ul>
    </div>
  );
};

export default ReadBooks;
