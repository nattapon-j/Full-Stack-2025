'use client';

import { useState } from 'react';

// 13-Workshop-2
import { config } from '../config';
import axios from 'axios';
import Swal from 'sweetalert2';

import { useRouter } from 'next/navigation';

export default function SignInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // 13-Workshop-2
    const router = useRouter();
    const handleSignIn = async () => {
        try {
            const payload = {
                username,
                password
            };

            const response = await axios.post(`${config.apiUrl}/user/signin`, payload);

            // console.log('Sign In Response:', response.data);

            if (response.data.token !== null) {
                // Store the token in localStorage
                localStorage.setItem('token', response.data.token);
                // Redirect to the home page
                // window.location.href = '/';
                router.push('/backoffice/dashboard');
            }
            else {
                Swal.fire({
                    title: 'Sign In Failed',
                    text: 'Invalid username or password.',
                    // icon: 'error',
                    icon: 'warning',
                    // confirmButtonText: 'OK'
                    timer: 2000,
                });
            }
        } catch (error: any) {
            Swal.fire({
                title: 'Error',
                text: error.response?.data?.message || 'An unexpected error occurred.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };


    return (
        <div className="signin-container">
            <div className='signin-box'>
                <h1 className='text-2xl font-bold'>Sign In</h1>

                <div>Username</div>
                <input
                    type="text"
                    placeholder='Enter your username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <div className='mt-4'>Password</div>
                <input
                    type="password"
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="mt-4" onClick={handleSignIn}>
                    Sign In
                    <i className="fa fa-sign-in-alt ml-2"></i>
                </button>
            </div>
        </div>

    );
}