import PropTypes from "prop-types";
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
  } = book;
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full bg-base-100 shadow-lg p-6 rounded-2xl">
      <figure className="lg:w-1/6 bg-base-200 rounded-2xl py-4 flex justify-center items-center">
        <img className="lg:w-52"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
ReadBook.propTypes = {
  book: PropTypes.object,
};

export default ReadBook;
