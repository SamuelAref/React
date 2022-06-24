import { useState } from "react";
import EffectHookMouse from "./EffectHookMouse";

const EffectHookMouseTwo = () => {

    const [display, setDisplay] = useState(true);


    return (

        <div>

            <button onClick={() => setDisplay(!display)}>Toggle</button>
            {display && <EffectHookMouse />}

        </div>
    );
}

export default EffectHookMouseTwo;