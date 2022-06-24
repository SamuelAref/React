import { useState } from "react";

const HookCounterThree = () => {

    const [name, setName] = useState({

        firstName: '',
        lastName: ''
    })


    return (

        <div>

            <form >

                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })} />
                {/* the ... used to make the value input at the same time  (the ... is called spread operator and is used to not overwrite the initial values and only add on them)  */}

                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })} />

                <h2>First Name is - {name.firstName}</h2>
                <h2>First Name is - {name.lastName}</h2>

            </form>

        </div>
    );
}

export default HookCounterThree;