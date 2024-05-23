import PropTypes from "prop-types";
import { LuMapPin } from "react-icons/lu";
import { AiOutlineTeam,  AiOutlineFile } from "react-icons/ai";
import { Link } from "react-router-dom";

const ReadBook = ({ book }) => {
  const {
    book_name,
    image,
    author,
    total_pages,
    rating,
    category,
    tags,
    publisher,
    year_of_publishing,
    id
  } = book;
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full bg-base-100 shadow p-6 rounded-2xl">
      <figure className="lg:w-1/6 bg-base-200 rounded-2xl py-4 flex justify-center items-center ">
        <img className="lg:w-44" src={image} alt={`image of ${book_name}`} />
      </figure>
      <div className="space-y-3 lg:flex-grow">
        <h2 className="card-title text-2xl font-playfair">{book_name}</h2>
        <p className="font-medium text-[#131313CC]">By: {author}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center flex-wrap gap-3">
            Tags:
            {tags.map((tag) => (
              <a
                key={tag}
                className="bg-[#23BE0A0D] px-4 rounded-3xl py-2 text-[#23BE0A]"
              >
                {tag}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
          <LuMapPin size={20} />
          <p className="font-medium text-[#131313CC]">Year of Publishing: {year_of_publishing}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-b-2 pb-3">
          <div className="flex items-center gap-2">
          <AiOutlineTeam size={20} />
          <p className="text-[#13131399]">Publisher: {publisher}</p>
          </div>
          <div className="flex items-center gap-2">
          <AiOutlineFile size={20} />
          <p className="text[#13131399]">Pages: {total_pages}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="bg-[#328EFF26] px-5 py-2 rounded-full font-medium text-[#328EFF]">Category: {category}</p>
          <p className="bg-[#FFAC3326] px-5 py-2 rounded-full font-medium text-[#FFAC33]">Rating: {rating}</p>
          <Link to={`/${id}`}>
          <button className="btn bg-[#23BE0A] rounded-full text-white px-5">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
ReadBook.propTypes = {
  book: PropTypes.object,
};

export default ReadBook;
