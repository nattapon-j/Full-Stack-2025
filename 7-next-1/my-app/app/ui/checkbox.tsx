'use client';

import { useState } from 'react';

export default function Checkbox() {
    const [javaChecked, setJavaChecked] = useState(false);
    const [pythonChecked, setPythonChecked] = useState(false);
    const [cSharpChecked, setCSharpChecked] = useState(false);

    const handleJavaChecked = (e: any) => {
        setJavaChecked(e.target.checked);
    }
    const handlePythonChecked = (e: any) => {
        setPythonChecked(e.target.checked);
    }
    const handleCSharpChecked = (e: any) => {
        setCSharpChecked(e.target.checked);
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={javaChecked}
                onChange={handleJavaChecked}
            /> {" "}Java
            <input
                type="checkbox"
                checked={pythonChecked}
                onChange={handlePythonChecked}
            /> {" "}Python
            <input
                type="checkbox"
                checked={cSharpChecked}
                onChange={handleCSharpChecked}
            /> {" "}C#

            <div>
                <div>Your Selected Languages:</div>
                <div>Java Checked :{javaChecked.toString()}</div>
                <div>Python Checked :{pythonChecked.toString()}</div>
                <div>C# Checked :{cSharpChecked.toString()}</div>
            </div>
        </div>
    );

}