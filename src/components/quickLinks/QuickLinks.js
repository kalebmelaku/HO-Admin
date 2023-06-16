import React from 'react';
import { AiOutlineBorderlessTable, AiOutlineLineChart } from 'react-icons/ai';
import { CiViewList, CiLogin, CiHome } from 'react-icons/ci';
import { BsGrid3X3GapFill, BsFillChatDotsFill } from 'react-icons/bs';
import {BiExit} from 'react-icons/bi'
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { ref } from 'firebase/storage';

function QuickLinks() {

  const navigate = useNavigate();
  const location = useLocation()

  // =======================================
  // ====== Handle Active Links Start ======
  // =======================================
  // const handleLinks = () => {
  //   let links = document.querySelectorAll('.link');
  //   links.forEach(link => {
  //     link.addEventListener('click', function () {
  //       links.forEach(li => li.classList.remove('active'));
  //       this.classList.add('active');
  //     });
  //   });
  // };
  // setTimeout(() => {
  //   handleLinks();
  // }, 1000);

  // ======================================
  // =====   Navigate Between Start   =====
  // ======================================

  const navigateToHomePage = () => {
    navigate('/news');
  };
  const addNews = () => {
    navigate('/addNews');
  };
  const logout = () => {
    navigate('/')
  }




  return (
    <section className='quick-links-wrapper fixed z-[2] top-[80px] w-[150px] sm:hidden lg:block  h-[calc(100vh-80px)] bg-white shadow-shadow3'>
      <ul className='mt-[1px]'>
        <li className={location.pathname == '/news' ? "active link flex items-center relative p-4 pl-5 cursor-pointer" : "link flex items-center relative p-4 pl-5 cursor-pointer"} onClick={navigateToHomePage}>
          <CiHome className='link-icon box-content text-xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3 text-sm'>Home</span>
        </li>

        <li className={location.pathname == '/addNews' ? "active link flex items-center relative p-4 pl-5 cursor-pointer" : "link flex items-center relative p-4 pl-5 cursor-pointer"} onClick={addNews}>
          <AiOutlineBorderlessTable className=' link-icon box-content text-xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3 text-sm'>Add News</span>
        </li>
        <li className={location.pathname == '/logout' ? "active link flex items-center relative p-4 pl-5 cursor-pointer" : "link flex items-center relative p-4 pl-5 cursor-pointer"} onClick={logout}>
          <BiExit className=' link-icon box-content text-xl pr-4 border-r-[1.5px] border-black' />
          <span className='pl-3 text-sm'>Logout</span>
        </li>
        
        
      </ul>
    </section>
  );
}

export default QuickLinks;
