import { useLoaderData, useParams } from "react-router-dom";
import Chart from "../components/Chart";

const PageToRead = () => {
    const books = useLoaderData();
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            {
                books.map(book => <Chart key={book.id} book={book}></Chart>)
            }
        </div>
    );
};

export default PageToRead;