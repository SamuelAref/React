import { useReducer } from "react";

//here we use the single reducer function for multiple objects

const initialState = 0;

const reducer = (state, action) => {

    switch (action) {

        case 'increment': return state + 1

        case 'decrement': return state - 1

        case 'reset': return initialState

        default: return state
    }

}

const ReduceHookCounterThree = () => {


    //dispatch is a method not a variable name
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)




    return (

        <div>

            <div>

                <div>Count - {count}</div>

                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
                <button onClick={() => dispatch('reset')}>Reset</button>

            </div>

            <div>

                <div>Count 2 - {countTwo}</div>

                <button onClick={() => dispatchTwo('increment')}>Increment</button>
                <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
                <button onClick={() => dispatchTwo('reset')}>Reset</button>

            </div>

        </div>


    );
}

export default ReduceHookCounterThree; 