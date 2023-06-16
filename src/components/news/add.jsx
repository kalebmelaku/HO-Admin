import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import QuickLinks from "../quickLinks/QuickLinks";
import { useState } from "react";
import { CollectionReference, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../config/firebase";
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'

export default function AddNews() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [img, setImg] = useState('');
    const [error, setError] = useState('');
    const filePath = `image_${Date.now()}`

    
    const CollectionRef = collection(db, "news")
    async function addNews(e) {
        e.preventDefault();
        const imageRef = ref(storage, filePath)
        uploadBytes(imageRef, img).then(() => {
            getDownloadURL(imageRef).then((uri) => {
                setImg(uri);
                console.log('from upload: '+img);
            })
            .catch((error) => console.log(error.message))
        }).catch((error) => console.log(error.message))
        console.log('outside upload: '+img);
        await addDoc(CollectionRef, {
            title: title,
            body: body,
            img: img,
            date: serverTimestamp()
        })
        
        // setImg(null)
        navigate('/news')



    }
    return (
        <>
            <NavBar />
            <QuickLinks />
            <section className=' components-wrapper absolute top-[80px] right-0 h-[calc(100vh-80px)] flex w-full mx-auto'>

                <section className='normal-text w-full h-ful py-3 flex items-center justify-center text-2xl'>
                    <div className="w-[500px] flex-col border border-[#02afff] px-6 py-7 shadow-md rounded-[4px] mx-2">
                        <div className="mb-8 flex justify-center">
                            <p className=' text-[24px] font-bold text-blue-800'>Add New Post</p>
                        </div>

                        <form onSubmit={addNews}>
                            <div className="flex flex-col text-sm rounded-md">
                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Title" />
                                <input
                                    // value={img}
                                    onChange={(e) => setImg(e.target.files[0])}
                                    className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="file" accept="image/*" />
                                
                                <textarea
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                    className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" placeholder="Body" />
                            </div>
                            <button className="mt-5 w-full p-2 bg-blue-800 text-white rounded-[4px] hover:bg-[#02afff] duration-300" type="submit">Post</button>
                            <p>{error}</p>
                        </form>

                    </div>

                </section>
            </section>
        </>
    );
}