import { useState, useEffect } from "react";


const useDocTitle = (count) => {


    useEffect(() => {

        document.title = `Count ${count}`

    }, [count])

    return (


        <div>

        </div>
    );
}

export default useDocTitle;