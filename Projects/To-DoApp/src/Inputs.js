import useFetch from "./useFetch";
import { useState } from "react";

const Inputs = () => {

    const url = 'http://localhost:3000/notes';
    const [note, setNote] = useState('Enter text here');
    const [filter, setFilter] = useState('Incomplete');
    const [isRendering, setIsRendering] = useState(false);

    console.log(filter);


    const handleClick = (e) => {


        const notes = { note, filter };
        setIsRendering(true);
        fetch(url, {

            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(notes)
        })

            .then(() => {

                console.log('new text added');
                setIsRendering(false);
            })
    }



    return (


        <form className="inputs" onSubmit={handleClick} >

            <input
                placeholder="Enter text here"
                type="text"
                required
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />

            {isRendering && <button>...</button>}
            {!isRendering && <button>Add</button>}

            <select
                onChange={(e) => setFilter(e.target.value)} >

                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Incomplete">Incomplete</option>


            </select>


        </form>
    );


}

export default Inputs;