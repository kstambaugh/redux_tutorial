import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByAmount } from "./counterSlice";

export function Counter(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')

    return(
        <div>
            <div>
                <button
                aria-label="Increment value"
                onClick={()=> dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button
                aria-label="Decrement value"
                onClick={()=> dispatch(decrement())}>
                    Decrement
                </button>
                <input
                aria-label="Set Increment Amount"
                value={incrementAmount}
                onChange={e => setIncrementAmount(e.target.value)}/>
                <button
                onClick={()=> dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                >
                    Add Amount
                </button>
                <button
                onClick={()=> dispatch(decrementByAmount(Number(incrementAmount) || 0))}
                >
                    Subtract Amount
                </button>
            </div>
        </div>
    )
}