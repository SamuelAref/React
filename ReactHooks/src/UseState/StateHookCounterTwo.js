import { useState } from "react";

const HookCounterTwo = () => {

    const initialCount = 0;

    const [count, setCount] = useState(initialCount);

    function incrementByFive() {

        for (let i = 0; i < 5; i++) {

            setCount(prevState => prevState + 1);


        }
    }

    return (

        <div>

            Count: {count}

            <button onClick={() => setCount(initialCount)}>Reset </button>
            <button onClick={() => setCount(count + 1)}>Increment </button>
            <button onClick={() => setCount(count - 1)}>Decrement  </button>
            <button onClick={() => incrementByFive()}>five  </button>




        </div>


    );
}

export default HookCounterTwo;