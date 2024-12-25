'use client'
// pages/auth.js
import { useEffect, useState } from 'react';


function AuthPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        // This code will only run on the client-side
        if (typeof window !== 'undefined') {
            const element = document.getElementById('my-element');
            // ... interact with the element ...
        }
    }, []);
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Basic client-side validation
        if (!isLogin && password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        try {
            const response = await fetch(`/api/auth/${isLogin ? 'login' : 'signup'}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                // Successful signup/login - redirect, set cookies, etc.
                console.log('Authentication successful!');
            } else {
                const errorData = await response.json();
                console.error('Authentication failed:', errorData.message);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className="flex min-h-screen flex-row items-center justify-around  bg-gradient-to-r from-teal-400 to-blue-500">

            <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(90deg, #48CFCB 0%, #2D807E 79%, #256967 100%)' }}></div>

            {/* Decorative lines */}
            <div className="absolute bottom-0 left-0 z-10 w-1/2 h-1/2">
                <div className="absolute -bottom-16 -left-20 w-72 h-72 border-t-2 border rounded-full border-black opacity-50"></div>
                <div className="absolute -bottom-44 left-4 w-96 h-96 border-t-2 border rounded-full border-black opacity-50"></div>
                <div className="absolute -bottom-40 left-12 w-64 h-64 border-t-2 border rounded-full border-black opacity-50"></div>
                <div className="absolute -bottom-40 left-80 w-72 h-72 border-t-2 border rounded-full border-black opacity-50"></div>
            </div>


            <div className='relative   z-20 w-1/3  p-2 h-96' >


                {/* ZenSoc text */}
                <div className="  z-20 text-7xl flex flex-row  justify-center items-center font-extralight text-[#424242]">
                    Zen

                    <h2 className=' social-links text-white text-9xl'  >

                        Soc
                    </h2>
                </div>

                {/* Text content */}
                <div className=" mt-2 top-1/2  left-16 z-20 w-full text-black">
                    <div className="text-xl font-light">
                        Streamline your social media with ZenSoc— scheduling, management, and listening in one place.
                        Save time, stay organized, and elevate your strategy effortlessly. Perfect for creators and brands ready to make an impact. Sign up today and simplify your social success!
                    </div>

                </div>
            </div>
            <div className="z-20 bg-[#424242] text-white p-6  rounded-lg shadow-md w-1/3 min-h-[60vh]">
                <h1 className="text-6xl font-sans mb-4 text-center text-teal-400  mt-16">
                    {isLogin ? 'Sign In' : 'Sign Up'}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4 px-10 mt-10 text-white">
                    <div className='border-white text-white'>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"

                            className="w-full bg-inherit border-2 border-white rounded py-2 px-3 text-md font-bold  text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="w-full bg-inherit  border-2 border-white rounded py-2 px-3 text-white text-md font-bold focus:outline-none focus:ring-2 focus:ring-teal-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                className="w-full bg-inherit  border-2 border-white rounded py-2 px-3 text-white  text-md font-bold focus:outline-none focus:ring-2 focus:ring-teal-400"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-[#229799] hover:bg-teal-600 text-white font-bold py-4 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                    >
                        {isLogin ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>
                <div className="text-center mt-4">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-white text-md font-bold hover:text-teal-500"
                    >
                        {isLogin ? 'Log In' : 'Log In'}
                    </button>
                </div>
            </div>

        </div>
    );
}

export default AuthPage;