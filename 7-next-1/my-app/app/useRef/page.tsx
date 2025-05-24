'use client';

import { useRef, useEffect, useState } from "react";

export default function Page() {
    const refUsername = useRef<HTMLInputElement>(null); // Create a ref for the input element
    // Initialize state for the username
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (refUsername.current) { // Check if the ref is attached to an input element
            // refUsername.current.value = ''; // Clear the input value
            refUsername.current.focus(); // Focus the input element when the component mounts
            // refUsername.current.value = 'John Doe'; // Set a default value for the input
            // setUsername(refUsername.current.value); // Update the state with the default value
        }
    }, []);

    return (
        <div>
            <input
                ref={refUsername}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <div>
                <div>Your username is: {username}</div>
            </div>
        </div>
    );
}