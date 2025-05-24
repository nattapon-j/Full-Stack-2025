'use client';

import { useContext } from "react"; // Import useContext from React
import { DataContext } from "../share/page";

export default function CounterDisplay() {
    const { counter } = useContext(DataContext); 
    // Use useContext to access the counter from DataContext

    return (
        <div>
            <h1>Counter: {counter}</h1> {/* Display the current counter */}
        </div>
    );
}