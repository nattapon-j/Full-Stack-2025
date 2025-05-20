'use client'

import { useSearchParams } from 'next/navigation';

export default function Page() {
    const searchParams = useSearchParams(); // useSearchParams is a hook that gives you access to the search params object
    // The search params object has methods like get, has, etc.
    // get: Get the value of a search param by name
    const name = searchParams.get('name'); // get the value of the search param 'name'

    return (
        <div>
            <h1>Search Params</h1>
            <p>Name: {name}</p>
        </div>
    );
}

// http://localhost:3000/searchParams?name=nattapon 