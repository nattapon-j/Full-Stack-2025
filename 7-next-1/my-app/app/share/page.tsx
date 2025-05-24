'use client';

import { createContext, useState } from "react";
import CounterButton from "../components/counterButton";
import CounterDisplay from "../components/counterDisplay";

export const DataContext = createContext<any>(undefined); // Create a context for sharing data
// <any> is used to allow any type of data to be shared
// (undefined is the initial value, which will be replaced by the provider)

export default function Page() {
    const [counter, setCounter] = useState(0); // State to hold the counter value

    return (
        <DataContext.Provider value={{ counter, setCounter }}> 
        {/* Provide the counter and setter */}
            <div>
                <h1>Share Data with Context</h1>
                <CounterDisplay /> {/* Display the current counter */}
                <CounterButton /> {/* Button to increment the counter */}
            </div>
        </DataContext.Provider>
    );
}