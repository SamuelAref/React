import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import useFilter from "../Hooks/useFilter";

const NavBar = () => {

    const { data } = useFetch('http://localhost:3000/Contact');


    const [search, setSearch] = useState('');


    const handleAdd = () => {

        const formContainer = document.getElementById('add');
        const form = document.getElementById('forms');
        const close = document.getElementById('close');

        formContainer.classList.add('add');
        form.style.display = "flex";
        close.style.display = "flex";
        console.log('hi');


    }

    const a = useFilter(data, search)

    // const { data2 } = useFilter(data, search);

    console.log(a);




    return (

        <div className="Nav-bar">

            <h1>CONTACTS</h1>

            <div className="search">

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button>Search</button>


            </div>


            <div className="add-contact">



                <img onClick={handleAdd} src="../images/addUser.png" alt="" />


            </div>




        </div>
    );


}

export default NavBar;