'use client';

interface userProfileProps {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}

export default function UserProfile({
    name,
    age,
    email,
    isAdmin,
}: userProfileProps) {
    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            {/* <p>Admin: {isAdmin ? 'Yes' : 'No'}</p> */}
            <p>{isAdmin && 'Admin User'}</p>
        </div>
    );
}