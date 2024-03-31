// import React, { useState } from "react";
// import { incrementAction, decrementAction } from "../redux/actions/counterActions";
import { useSelector, useDispatch } from "react-redux"
import x, { decrement, increment } from "../redux/counterSlice";

export const Counter = () => {
    // const [count, setCount] = useState(0);
    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
        // setCount(count + 1);
        // incrementAction(dispatch);
    }
    const handleDecrement = () => {
        dispatch(decrement())
        // setCount(count - 1);
        // decrementAction(dispatch);
    }

    return (
        <div>
            <p> {count} </p>
            <button onClick={handleIncrement}> Increment </button>
            <button onClick={handleDecrement}> Decrement </button>
        </div>
    )
}