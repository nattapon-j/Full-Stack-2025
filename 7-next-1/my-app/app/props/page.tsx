'use client';

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    return (
        <header>
            <h1>Welcome to {title}'s Shopping App</h1>
        </header>
    );
}
