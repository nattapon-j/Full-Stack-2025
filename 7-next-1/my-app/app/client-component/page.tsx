'use client';

import { useState } from "react";

export default function ClientComponent() {
    const [items] = useState(['Java', 'JavaScript', 'Python']);
    // This is a client component that will be rendered on the client side
    // You can use the useState hook to manage state in your component
    // You can also use the map function to iterate over an array and render a list of items
    // For example, if you have an array of items, you can use the map function to render a list of items

    return (
        <div>
            <h1>Client Component</h1>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
