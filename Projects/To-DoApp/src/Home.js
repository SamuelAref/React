import { useEffect } from "react";
import Inputs from "./Inputs";
import Output from "./Output";
import useFetch from "./useFetch";

const Home = () => {


    const { data, isRendering, error } = useFetch('http://localhost:3000/notes');


    return (

        <div className="Home">

            <div className="content-container">

                <Inputs />

                {error && <div> {error} </div>}
                {isRendering && <div> Loading.... </div>}


                {data && <Output notes={data} />}

                {console.log(data)}


            </div>
        </div>
    );
}

export default Home;