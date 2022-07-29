import * as React from "react";

import { AiFillTag, AiOutlineClose } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { useUI } from "../store/Context";

const MobileNavbar: React.FC = () => {
  const ui = useUI();

  return (
    <>
      {
        <>
          <div
            className={
              ui.isSidebarOpen
                ? "bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
                : ""
            }
          />

          <div
            className={
              ui.isSidebarOpen
                ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500"
                : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500"
            }
          >
            <AiOutlineClose
              size={30}
              className='absolute right-4 top-4 cursor-pointer'
              onClick={() => ui.setSidebarOpen(false)}
            />
            <h2 className='text-2xl p-4'>
              Best <span className='font-bold'>Eats</span>
            </h2>
            <nav>
              <ul className='flex flex-col p-4 text-gray-600'>
                <li className='text-xl py-4 flex'>
                  <TbTruckDelivery size={25} className='mr-4' /> Orders
                </li>
                <li className='text-xl py-4 flex'>
                  <MdFavorite size={25} className='mr-4' /> Favorites
                </li>
                <li className='text-xl py-4 flex'>
                  <FaWallet size={25} className='mr-4' /> Wallet
                </li>
                <li className='text-xl py-4 flex'>
                  <MdHelp size={25} className='mr-4' /> Help
                </li>
                <li className='text-xl py-4 flex'>
                  <AiFillTag size={25} className='mr-4' /> Promotions
                </li>
                <li className='text-xl py-4 flex'>
                  <BsFillSaveFill size={25} className='mr-4' /> Best Ones
                </li>
                <li className='text-xl py-4 flex'>
                  <FaUserFriends size={25} className='mr-4' /> Invite Friends
                </li>
              </ul>
            </nav>
          </div>
        </>
      }
    </>
  );
};

export default MobileNavbar;
