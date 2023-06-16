import React from 'react';
import { FiAlignLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


function NavTitle() {

  const navigate = useNavigate();

  const handleMenuLinks = () => {
    let links = document.querySelector('.quick-links-wrapper');
    let wrapper = document.querySelector('.components-wrapper');
    links.classList.toggle('small');
    wrapper.classList.toggle('small');
  };

  const navigateToHomePage = () => {
    navigate('/');
  };

  return (
    <>
      <div className=' w-fit h-full flex items-center gap-3'>
        <FiAlignLeft id='menu-icon' className=' text-2xl cursor-pointer' onClick={handleMenuLinks} />
        <p className='dark:text-white text-[24px] font-bold cursor-pointer text-blue-800' onClick={navigateToHomePage}>Health Bureau</p>
      </div>
    </>
  );
}

export default NavTitle;
