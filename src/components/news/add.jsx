import { useNavigate } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import QuickLinks from "../quickLinks/QuickLinks";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function AddNews() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [img, setImg] = useState('');
    const [error, setError] = useState('');
    const filePath = `image_${Date.now()}`;
    // let image

    const CollectionRef = collection(db, "news");
    async function addNews(e) {
        e.preventDefault();
        const imageRef = ref(storage, filePath);
        try {
            await uploadBytes(imageRef, img);
            const uri = await getDownloadURL(imageRef);
            // const setImg = async (uri)=> {
            //     image = await uri
            // }
            // setImg();
            await addDoc(CollectionRef, {
                title: title,
                body: body,
                img: uri,
                date: serverTimestamp()
            });
            navigate('/news');
        } catch (error) {
            setError(error.message);
        }
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
                                    className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#02afff] " type="text" placeholder="Title" />
                                <input
                                    // value={img}
                                    onChange={(e) => setImg(e.target.files[0])}
                                    className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#02afff] " type="file" accept="image/*" />

                                <textarea
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                    className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-[#02afff]" placeholder="Body" />
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