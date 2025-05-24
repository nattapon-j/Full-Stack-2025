'use client';

import { useState } from 'react';

export default function RadioBox() {
    const [gender, setGender] = useState('male');

    const handleGenderChange = (e: any) => {
        setGender(e.target.value);
    }

    return (
        <>
            <div>
                <input
                    type="radio"
                    value="male"
                    checked={gender === 'male'}
                    onChange={handleGenderChange} />
                <label>Male</label>
            </div>
            <div>
                <input
                    type="radio"
                    value="female"
                    checked={gender === 'female'}
                    onChange={handleGenderChange} />
                <label>Female</label>
            </div>
            <div>
                <div>Your selected gender</div>
                <div>is: {gender}</div>
            </div>
        </>
    );
}
