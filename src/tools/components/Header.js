import React, { useContext } from "react";
// sidebar context
// import { SidebarContext } from '../contexts/SidebarContext';
// import icons
import logo from "../../assets/DMN COLOUR FINAL LOGO-2 Background Removed.png"
import { BsBag } from "react-icons/bs";
import { SidebarContext } from "../../contexts/SidebarContext";
import { useCartContext } from "../../contexts/CartContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { cart, clearCart } = useCartContext();

  return (
    <header className="flex p-5 justify-between bg-white shadow-xl h-20">
      <img src={logo} alt="" className="w-60 h-60 -mt-24"/>
      <div>DMN Store</div>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex">
        <BsBag className="text-2xl" />
        <div className="uppercase text-xs font-semibold md:w-5 md:h-5 border-2 rounded-full text-center bg-blue-200 0">{cart.length}</div>
      </div>
    </header>
  );
};

export default Header;
