import { Route, Routes } from 'react-router-dom';
import News from './components/news/news';
import AddNews from './components/news/add';
import Login from './components/login/Login';
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <section className=' relative w-screen h-screen'>

        <NavBar />
        {/* <QuickLinks />
    
        <section className=' components-wrapper absolute top-[80px] right-0 h-[calc(100vh-80px)] flex'>


        </section> */}
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/news' element={<News />} />
            <Route path='/addNews' element={<AddNews />} />



          </Routes>

    </section>
  );
}

export default App;
