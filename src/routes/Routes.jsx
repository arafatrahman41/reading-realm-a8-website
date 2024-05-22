import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import ListedBooks from "../pages/ListedBooks";
import PageToRead from "../pages/PageToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('books.json')
      },
      {
        path:'/list',
        element: <ListedBooks/>
      },
      {
        path: '/reading',
        element: <PageToRead/>
      }
    ],
  },
]);
