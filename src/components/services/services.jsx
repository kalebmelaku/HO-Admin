import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import {
    collection,
    getDocs,
    query,
    orderBy,
    deleteDoc,
    doc,
} from "firebase/firestore";
import NavBar from "../navbar/NavBar";
import QuickLinks from "../quickLinks/QuickLinks";


export default function Services() {
    const [news, setNews] = useState([]);
    const newsCollectionRef = collection(db, "services");
    const q = query(newsCollectionRef);
    useEffect(() => {
        const getNews = async () => {
            const snapshot = await getDocs(q);
            // const data = snapshot.docs.map(doc => doc.data());
            const data = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setNews(data);
        };
        getNews();
    }, [q]);

    const deleteItem = async (item) => {
        // console.log(item);
        const userDoc = doc(db, "services", item);
        await deleteDoc(userDoc);

        const snapshot = await getDocs(q);
        // const data = snapshot.docs.map(doc => doc.data());
        const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }));
        setNews(data);
    };
    return (
        <>
        <NavBar />
        <QuickLinks />
        <section className=' components-wrapper absolute top-[80px] right-0 h-[calc(100vh-80px)] flex w-full mx-auto'>
        <div className='overflow-scroll w-full p-8 flex mt-[20px] '>
            <div className="flex flex-col w-full">
                <div className="overflow-x-auto w-full sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm dark:text-white font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">#</th>
                                        <th scope="col" className="px-6 py-4">Title</th>
                                        <th scope="col" className="px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {news.map((item, id) => (

                                        <tr key={id} className="border-b dark:border-neutral-500">
                                            <td className="count whitespace-nowrap px-6 py-4 font-medium"></td>
                                            <td className="whitespace-wrap px-6 py-4">{item.title}</td>
                                            <td className="whitespace-nowrap px-6 py-4 flex items-center">
                                                <button
                                                    onClick={() => deleteItem(item.id)}
                                                    type='button'
                                                    className='table-btn cursor-pointer mr-2 flex items-center justify-center box-content bg-red-400 hover:bg-red-500 p-[7px] pr-[10px] pl-[10px] rounded-sm'>X</button>
                                                {/* <button type='button' className='table-btn cursor-pointer flex items-center justify-center w-40px bg-yellow-400 hover:bg-yellow-500 p-[7px] pr-[10px] pl-[10px] rounded-sm'>edit</button> */}
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>

    );
}