import React from 'react'
import { BsSunFill, BsMoon } from 'react-icons/bs'


function Theme() {

    const handleTheme = () => {
        let indicator = document.getElementById('indicator')
        let body = document.querySelector('body')
        indicator.classList.toggle('dark')
        body.classList.toggle('dark')
    }

  return (
    <div id='theme-container' className=' flex items-center justify-between pl-[5px] pr-[5px] sm:mr-0 md:mr-3 bg-white h-[30px] w-[65px] relative rounded-lg shadow-shadow1 cursor-pointer' onClick={handleTheme}>
        <BsSunFill className=' text-lg text-black' />
        <i id='indicator' className=' w-[30px] h-[30px] bg-[#02afff] absolute rounded-lg scale-[0.84] left-0 duration-100'></i>
        <BsMoon />
    </div>
  )
}

export default Theme
