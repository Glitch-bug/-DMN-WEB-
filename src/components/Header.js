import React, { useContext } from 'react';
// sidebar context
// import { SidebarContext } from '../contexts/SidebarContext';
// import icons
import {BsBag} from 'react-icons/bs'
import { SidebarContext } from '../contexts/SidebarContext';

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  return (
    <header className='bg-pink-200'>
      <div>Header</div>
      <div onClick={()=> setIsOpen(!isOpen)}
      className='cursor-pointer'>
        <BsBag className='text-2xl' />
      </div>
  </header>
  );
};

export default Header;
