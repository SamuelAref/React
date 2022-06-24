import { useReducer } from "react";


const initialState = {

    firstCounter: 0,
    SecondCounter: 10
};

const reducer = (state, action) => {

    switch (action.type) {

        case 'increment': return { ...state, firstCounter: state.firstCounter + action.value }

        case 'decrement': return { ...state, firstCounter: state.firstCounter - action.value }

        case 'increment2': return { ...state, SecondCounter: state.SecondCounter + action.value }

        case 'decrement2': return { ...state, SecondCounter: state.SecondCounter - action.value }


        case 'reset': return initialState

        default: return state
    }

}

const ReduceHookCounterTwo = () => {


    //dispatch is a method not a variable name
    const [count, dispatch] = useReducer(reducer, initialState)




    return (

        <div>

            <div>Count1 - {count.firstCounter}</div>
            <div>Count2 - {count.SecondCounter}</div>


            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>


            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

            <div>


                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment2</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement2</button>
            </div>

        </div>
    );
}

export default ReduceHookCounterTwo; 