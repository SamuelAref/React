import { Link } from "react-router-dom";

const Browse = (prop) => {

    let books = prop.books;



    return (

        <div className="browse" >

            {books.map((book) => (




                <Link to={`books/${book.id}`} style={{
                    backgroundImage: `url(${book.image})`

                }} className="image-preview" key={book.id}>

                </Link>


            ))}


        </div>
    );
}

export default Browse;