import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const BooksCard = () => {
    const books = useLoaderData();
    return (
        <div>
            <h1 className="text-4xl font-bold font-playfair text-center mt-24 text-[#131313]">Books</h1>
            
                <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
                    {
                        books.map(book => <Book key={book.id} book={book}></Book>)
                    }
                </ul>
            
        </div>
    );
};

export default BooksCard;