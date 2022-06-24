import useFetch from "./useFetch";
import Browse from "./Browse";


const Home = () => {

    const url = 'http://localhost:3000/books';
    const { data, isRendering, error } = useFetch(url);

    return (

        <div className="Home">

            <div className="welcome">

                <h2>Welcome</h2>

            </div>

            {error && <div> {error} </div>}
            {isRendering && <div> Loading.....</div>}
            {data && <Browse books={data} />}

        </div>
    );
}

export default Home;