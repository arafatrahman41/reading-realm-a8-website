import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import ListedBooks from "../pages/ListedBooks";
import PageToRead from "../pages/PageToRead";
import BookDetails from "../pages/BookDetails";

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
          
        ]
      },
      {
        path: "/reading",
        element: <PageToRead />,
      },
    ],
  },
]);
