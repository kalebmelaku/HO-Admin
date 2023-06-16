import React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from 'react-router-dom';

function LoginComp() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // const userCredential = await signInWithEmailAndPassword(auth, email, password);
            await signInWithEmailAndPassword(auth, email, password);
            // console.log(userCredential.user);
        navigate('/news')
        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    };
    return (
        <form onSubmit={handleLogin}>

            <div className="flex flex-col text-sm rounded-md">
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="dark:text-black mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#02afff] " type="text" placeholder="Username or Email id" />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="dark:text-black border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-[#02afff]" type="password" placeholder="Password" />
            </div>
            <button className="mt-5 w-full p-2 bg-blue-800 text-white rounded-[4px] hover:bg-[#02afff] duration-300" type="submit">Login</button>
            <p>{error}</p>
        </form>
    );
}

export default LoginComp;
