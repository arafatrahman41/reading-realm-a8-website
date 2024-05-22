import { FaChevronDown } from "react-icons/fa";

const ListedBooks = () => {
  return (
    <div>
      <div className="bg-base-200 rounded-2xl mt-8">
        <h1 className="text-[#131313] text-3xl font-bold text-center py-8">
          Books
        </h1>
      </div>
      <div className="text-center">
        <details className="dropdown my-8">
          <summary className="m-1 btn px-5 bg-[#23BE0A] text-white text-lg">
            Sort By <FaChevronDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a className="whitespace-nowrap">Number of pages</a>
            </li>
            <li>
              <a>Published Year</a>
            </li>
          </ul>
        </details>
      </div>
      {/* Tabs */}
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </a>
      </div>
    </div>
  );
};

export default ListedBooks;
