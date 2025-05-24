'use client';

import { useState } from 'react';

export default function DropdownList() {
    const [food, setFood] = useState('pizza');

    return (
        <div>
            <select
                value={food}
                onChange={(e) => setFood(e.target.value)}
            >
                <option value="pizza">Pizza</option>
                <option value="burger">Burger</option>
                <option value="sushi">Sushi</option>
                <option value="salad">Salad</option>
            </select>
            <div>
                <div>Your selected food</div>
                <div>is: {food}</div>
            </div>
        </div>
    );

}

// This code defines a DropdownList component that allows users to select an option from a dropdown menu.