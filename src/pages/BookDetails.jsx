import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
    const book = useLoaderData();
    // console.log(book);
  return (
    <div className="mt-16">
        <div className="hero-content flex-col lg:flex-row">
        <div>
          <img
            src="" alt={`image of `}
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
