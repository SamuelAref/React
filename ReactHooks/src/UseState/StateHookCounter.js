import { useState } from "react";

const HookCounter = () => {

    let [count, setCount] = useState(0);



    return (

        <div>

            <button onClick={() => setCount(count + 1)}> Count {count}</button>
        </div>
    );
}

export default HookCounter;