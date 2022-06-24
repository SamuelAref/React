import Content from "./components/Content";

// new 

import { useState } from "react";
import useFetch from "./Hooks/useFetch";


function App() {



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

  // console.log(search);





  return (

    <div className="App">


      {/* new */}

      <div className="Nav-bar">

        <h1>CONTACTS</h1>

        <div className="search">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for contact ( first name or last name )"
          />
          {/* <button>Search</button> */}


        </div>


        <div className="add-contact">



          <img onClick={handleAdd} src="../images/addUser.png" alt="" />


        </div>




      </div>




      {/* <NavBar /> */}

      {!data && <h2>Loading ...</h2>}

      {data && <Content data={data} data2={data.filter((dat) => dat.firstName.toLowerCase() === search.toLowerCase() || dat.lastName.toLowerCase() === search.toLowerCase())} search={search} />}
      {/* {data && <Content />} */}

    </div>

  );
}

export default App;
