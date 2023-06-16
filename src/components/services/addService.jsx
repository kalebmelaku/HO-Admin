import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import NavBar from "../navbar/NavBar";
import QuickLinks from "../quickLinks/QuickLinks";

export default function AddService(){
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');

    
    const CollectionRef = collection(db, "services")
    async function addService(e) {
        e.preventDefault();
       
        await addDoc(CollectionRef, {
            title: title,
            desc: body,
        }).catch(err => setError(err.message))
        
        // setImg(null)
        navigate('/services')



    }
    return (
        <>
                <NavBar/>
                <QuickLinks/>
            <section className=' components-wrapper absolute top-[80px] right-0 h-[calc(100vh-80px)] flex w-full mx-auto'>
            <section className='normal-text w-full h-ful py-3 flex items-center justify-center text-2xl'>
                    <div className="w-[500px] flex-col border border-[#02afff] px-6 py-7 shadow-md rounded-[4px] mx-2">
                        <div className="mb-8 flex justify-center">
                            <p className=' text-[24px] font-bold text-blue-800'>Add Service</p>
                        </div>

                        <form onSubmit={addService}>
                            <div className="flex flex-col text-sm rounded-md">
                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#02afff] " type="text" placeholder="Title" />
                                
                                <textarea
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                    className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-[#02afff]" placeholder="Description" />
                            </div>
                            <button className="mt-5 w-full p-2 bg-blue-800 text-white rounded-[4px] hover:bg-[#02afff] duration-300" type="submit">Post</button>
                            <p>{error}</p>
                        </form>

                    </div>

                </section>
            </section>
        </>
    )
}