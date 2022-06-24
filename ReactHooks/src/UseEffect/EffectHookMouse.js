import { useState, useEffect } from "react";

const EffectHookMouse = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {

        console.log('Mouse event');
        setX(e.clientX)
        setY(e.clientY)

    }

    useEffect(() => {

        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition)

        //to clean up code and remove unneccessary ones
        return () => {

            console.log('component unmount');
            window.removeEventListener('mousemove', logMousePosition)
        }

    }, [])





    return (

        <div>

            Hooks X - {x} Y - {y}

        </div>
    );
}

export default EffectHookMouse;