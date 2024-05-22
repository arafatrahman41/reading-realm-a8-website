import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
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
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800 mb-8 mt-10">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Wishlist Books</span>
        </Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default ListedBooks;
