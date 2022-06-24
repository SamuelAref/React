import useFetch from "./useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const DisplayBook = () => {

    const url = 'http://localhost:3000/books/';

    const { id } = useParams();

    const { data, isRendering, error } = useFetch(`${url}${id}`);



    return (


        <div className="display">

            {isRendering && <div> Loading.... </div>}
            {error && <div> {error} </div>}
            {data && (

                <div className="display-container">


                    <div className="displayBlock">

                        <div className="display-title">

                            <h2>Title</h2>
                            <h4>{data.title}</h4>

                        </div>

                        <div className="display-author">

                            <h2>Author</h2>
                            <h4>{data.author}</h4>

                        </div>

                        <div className="published">

                            <h2>Published</h2>
                            <h4>{data.published}</h4>


                        </div>

                        <div className="description">

                            <h2>Description</h2>
                            <p>{data.description}</p>
                        </div>


                    </div>

                    <div style={{

                        backgroundImage: `url(../${data.image})`

                    }} className="display-image">


                    </div>

                </div>

            )}



        </div>


    );
}

export default DisplayBook;