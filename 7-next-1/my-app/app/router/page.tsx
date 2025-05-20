'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter() // useRouter is a hook that gives you access to the router object
    // The router object has methods like push, replace, back, etc.
    // push: Navigate to a new URL

    return (
        <div>
            <button type='button'
                onClick={() => router.push('/dashboard')}>
                Go to Dashboard
            </button>
        </div>
    )
}