import * as React from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { useUI } from "../store/Context";
import MobileNavbar from "./MobileNavbar";

const Navbar: React.FC = () => {
  const ui = useUI();

  return (
    <div className='max-w-[1640px] mx-auto flex justify-evenly items-center p-4'>
      {/* Left side */}
      <div className='flex items-center '>
        <div className='cursor-pointer' onClick={ui.setSidebarOpen}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl px-2 sm:text-3xl lg:text-4xl '>
          Best <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden md:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          type='text'
          placeholder='Search foods'
          className='bg-transparent p-2 focus:outline-none w-full'
        />
      </div>

      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' />
        Cart
      </button>

      <MobileNavbar />
    </div>
  );
};

export default Navbar;
