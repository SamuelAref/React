import { useState } from "react";
import Home from "./Home";
import useFetch from "./useFetch";

const Output = (data) => {


    const notes = data.notes;





    const handleComplete = (id) => {

        const li = document.getElementById(id);

        li.classList.remove('uncross');
        li.classList.add('cross');
        console.log(li.innerHTML);

        console.log('hi');


    }

    const handleInComplete = (id) => {

        // const complete = document.getElementById(`complete`);
        const li = document.getElementById(id);


        li.classList.remove('cross');
        li.classList.add('uncross');
        console.log(li.innerHTML);

        console.log('hi');




    }

    const handleDelete = (a) => {

        fetch('http://localhost:3000/notes/' + a.id, {

            method: 'DELETE'

        })

            .then(() => {

                window.location.reload();
            })
    }












    return (


        <div className="outputs" >

            <ol id="order" className="order">

                {notes.map((pro) => (

                    <div key={pro.id} id="a" className="a">



                        <li
                            id={pro.id}
                            className="output-preview"
                            key={pro.id}

                        >{pro.note}</li>

                        <button id="complete" onClick={() => handleComplete(pro.id)}  >Completed</button>
                        <button id="incomplete" onClick={() => handleInComplete(pro.id)}  >InComplete</button>

                        <button id="delete" onClick={() => handleDelete(pro)} >Delete</button>

                    </div>





                ))}





            </ol>




        </div>


    );
}

export default Output;