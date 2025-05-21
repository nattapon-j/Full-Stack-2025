'use client';

import { useState } from 'react';

export default function Page() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };
    // This is a client component that will be rendered on the client side
    // You can use the useState hook to manage state in your component

    return (
        <div>
            <h1>UI Event</h1>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}