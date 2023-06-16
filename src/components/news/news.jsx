import NavBar from "../navbar/NavBar";
import QuickLinks from "../quickLinks/QuickLinks";
import NewsTable from "./newsTable";

export default function News() {
    return (
        <>
            <NavBar />
            <QuickLinks />
            <section className=' components-wrapper absolute top-[80px] right-0 h-[calc(100vh-80px)] flex w-full mx-auto'>
                
            <NewsTable/>
                </section>
        </>
    )
}