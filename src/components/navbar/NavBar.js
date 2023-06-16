import React from 'react'
import NavRight from './NavRight'
import NavTitle from './NavTitle'


function NavBar() {
  return (
    <nav className=' fixed top-0 left-0 w-full h-[80px] bg-white shadow-shadow1 flex justify-between items-center pl-[3%] pr-[3%] z-10'>
      <NavTitle /> 
      <NavRight />
    </nav>
  )
}

export default NavBar
