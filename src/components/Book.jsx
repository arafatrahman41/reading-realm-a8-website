import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { book_name, author, image, category, tags, rating, id } = book;
  return (
    <Link to={`/${id}`} className="p-6 rounded-lg border-2">
      <div className="bg-base-200 rounded-lg p-4">
        <img
          src={image}
          alt=""
          className="w-48 mx-auto rounded-md h-72 dark:bg-gray-500"
        />
      </div>
      <div className="mt-6 mb-2 space-y-4">
        <span className="block text-sm font-medium  space-x-3">
          {
            tags.map(tag => <a key={tag} className="bg-[#23BE0A0D] px-4 rounded-3xl py-2 text-[#23BE0A]">
                {tag}
            </a>)
          }
        </span>
        <h2 className="text-2xl font-bold font-playfair">{book_name}</h2>
        <p className="border-dotted border-b-2 pb-5">By: {author}</p>
      </div>
      <div className="flex items-center justify-between font-medium mt-5">
          <div>
            {category}
          </div>
          <div className="flex items-center gap-2">
            {rating}
            <FaRegStar />
          </div>
      </div>
    </Link>
  );
};
Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
