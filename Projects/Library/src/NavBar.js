import { Link } from "react-router-dom";

const NavBar = () => {
    return (

        <div className="Nav-Bar">

            <h2>LIBRARY</h2>

            <div className="link">

                <Link to="/">HOME</Link>
                <Link to="/AddBook">ADD BOOK</Link>

            </div>



        </div>
    );
}

export default NavBar;