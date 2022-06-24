import { userContext } from "../App";
import { useContext } from "react";

const ComponentC = () => {

    const user = useContext(userContext);



    return (

        <div>

            {user}

        </div>
    );
}

export default ComponentC;