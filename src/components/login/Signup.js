import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user);
        } catch (error) {
            setError(error.message);
        }
    };

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const userCredential = await signInWithEmailAndPassword(auth, email, password);
    //         console.log(userCredential.user);
    //     } catch (error) {
    //         setError(error.message);
    //         console.log(error);
    //     }
    // };

    return (
        <form onSubmit={handleSignup}>
            <div className="grid grid-cols-1 text-sm md:grid-cols-2 gap-4">

                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="dark:text-black mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#02afff] " type="text" placeholder="First Name" />


                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="dark:text-black mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#02afff] " type="text" placeholder="Last Name" />


                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="dark:text-black mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#02afff] " type="text" placeholder="Phone" />


                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="dark:text-black mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#02afff] " type="email" placeholder="Email" />


                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="dark:text-black mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#02afff] " type="password" placeholder="Password" />


                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="dark:text-black mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#02afff] " type="password" placeholder="Confirm Password" />

            </div>
            <button className="mt-5 w-full p-2 bg-blue-800 text-white rounded-[4px] hover:bg-[#02afff] duration-300" type="submit">Sign Up</button>
            <p>{error}</p>
        </form>
    );
}

export default Signup;