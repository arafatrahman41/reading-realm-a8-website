import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks } from "../utils";

const BookDetails = () => {
  const book = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const singleBook = book.find((singleBook) => singleBook.id === idInt);
  const {
    book_name,
    author,
    image,
    category,
    tags,
    rating,
    review,
    total_pages,
    publisher,
    year_of_publishing,
  } = singleBook;

  const handleRead = (singleBook) =>{
    saveBooks(singleBook)
  }
  const handleWishlist = (singleBook) => {
    // console.log(singleBook);
  }

  return (
    <div className="flex gap-12 flex-col lg:flex-row mt-16">
      <div className="bg-base-200 rounded-2xl lg:w-[48%] flex flex-col justify-center items-center">
        <img
          src={image}
          alt={`image of ${book_name}`}
          className="lg:h-[65vh]  object-cover p-5"
        />
      </div>
      <div className="lg:w-[48%]">
        <h1 className="text-3xl lg:text-5xl font-bold font-playfair text-[#131313]">
          {book_name}
        </h1>
        <p className="pt-4 text-xl font-medium border-b-2 pb-6 text-[#131313CC]">
          By: {author}
        </p>
        <p className="py-4 text-xl font-medium border-b-2 text-[#131313CC]">
          {category}
        </p>
        <p className="py-6">
          <strong>Review: </strong>
          {review}
        </p>
        <p className="space-x-2 border-b-2 pb-6">
          <strong>Tags: </strong>
          {tags.map((tag) => (
            <a
              key={tag}
              className="bg-[#23BE0A0D] px-4 rounded-3xl py-2 text-[#23BE0A]"
            >
              {tag}
            </a>
          ))}
        </p>
        <div className="flex items-center gap-14  py-6">
          <div className="space-y-3 text-[#131313B2]">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="space-y-3 text-[#131313] font-semibold">
            <p>{total_pages}</p>
            <p>{publisher}</p>
            <p>{year_of_publishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="space-x-3">
          <button onClick={() => handleRead(singleBook)} className="btn btn-outline px-6">Read</button>
          <button onClick={() => handleWishlist(singleBook)} className="btn bg-[#50B1C9] px-6 text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
