import { useEffect, useState } from "react";


const EffectHookInterval = () => {

    const [count, setCount] = useState(0);

    const tick = () => {

        setCount(count + 1)
    }

    useEffect(() => {

        const interval = setInterval(tick, 1000)

        return () => {

            clearInterval(interval);
        }


    }, [count]) //empty is wrong , and also we should define functions inside our useEffect if they are dependencies 


    return (

        <div>

            {count}

        </div>
    );
}

export default EffectHookInterval;