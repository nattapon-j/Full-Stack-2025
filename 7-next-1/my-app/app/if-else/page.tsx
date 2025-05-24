'use client';

import { useState } from 'react';

export default function Page() {
    const [name, setName] = useState('');

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            // placeholder="Enter your name"
            />

            {name === 'admin' ? <div>
                <h1>Welcome, Admin!</h1>
            </div> : <div>
                <h1>Welcome, User!</h1>
            </div>
            }
        </div>
        );
    }