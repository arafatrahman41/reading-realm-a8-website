import toast from "react-hot-toast";

// get
export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

// save
export const saveBooks = (singleBook) => {
  let books = getBooks();
  const isExist = books.find((b) => b.id === singleBook.id);
  if (isExist) {
    return toast.error("This book already exist, Please add a different book.");
  }
  books.push(singleBook);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success('The book has been added successfully')
};
