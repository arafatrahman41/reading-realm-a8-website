import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import ListedBooks from "../pages/ListedBooks";
import PageToRead from "../pages/PageToRead";
import BookDetails from "../pages/BookDetails";
import ReadBooks from "../components/ReadBooks";
import WishList from "../components/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/:id",
        element: <BookDetails />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/list",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBooks />,
          },
          {
            path: "wishlist",
            element: <WishList />,
          },
        ],
      },
      {
        path: "/reading",
        element: <PageToRead />,
        loader: () => fetch('/books.json'),
      },
    ],
  },
]);
