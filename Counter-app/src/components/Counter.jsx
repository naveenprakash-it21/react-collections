import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, reset} from '../counterSlice';

// Sends actions to update the state...

const Counter = () => {
    const count = useSelector((state) => state.counter.count); // Accesses redux state
    const dispatch = useDispatch(); // Sends actions to the store
   
    return (
    <>
        <h3>Counter: {count}</h3>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>

    </>
  )
}

export default Counter