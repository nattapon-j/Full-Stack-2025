'use client';

import { useContext } from "react"; // Import useContext from React
import { DataContext } from "../share/page"; 

export default function CounterButton() {
    const { counter, setCounter } = useContext(DataContext);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <button onClick={incrementCounter}>Increment Counter</button>
    );
}
