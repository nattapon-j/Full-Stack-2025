'use client';

import { useState } from 'react';

export default function DropdownList() {
    const [foodList, setFoodList] = useState([
        {name: 'Pizza'},
        {name: 'Burger'},
        {name: 'Sushi'},
        {name: 'Salad'},
        {name: 'Pasta'},
        {name: 'Tacos'},
        {name: 'Ice Cream'},
    ]);

    const [food, setFood] = useState('pizza');

    return (
        <div>
            <select
                onChange={(e) => setFood(e.target.value)}
            >
                {foodList.map((item, index) => (
                    <option key={index} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
            <div>
                <div>Your selected food</div>
                <div>is: {food}</div>
            </div>
        </div>
    );

}

// This code defines a DropdownList component that allows users to select an option from a dropdown menu.