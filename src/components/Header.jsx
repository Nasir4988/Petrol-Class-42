import React from 'react'
import { MdOutlineMarkEmailRead,MdWifiCalling3 } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <header className='py-2 bg-hbg'>
        <div className="max-w-container mx-auto">
            <div className='flex items-center flex-wrap'>
                <div className='w-full lg:w-1/4'>
                <div className='flex items-center justify-center lg:justify-start gap-x-2'>
                  <MdOutlineMarkEmailRead className='text-white'/>
                  <p className='text-white text-center font-pops'>mail@yourcompany.com</p>
                </div>
                </div>
                <div className='w-full lg:w-1/4 py-3 lg:py-0'>
                <div className='flex items-center justify-center lg:justify-start gap-x-2'>
                  <MdWifiCalling3 className='text-white'/>
                  <p className='text-white font-pops'>+896 120 5889 (Toll free)</p>
                </div>
                </div>
                <div className='w-full lg:w-1/2'>
                <div className='flex lg:justify-end justify-center gap-x-3'>
                  <FaFacebookF className='text-white'/>
                  <FaTwitter className='text-white'/>
                  <FaLinkedin className='text-white'/>
                  <AiFillInstagram className='text-white'/>
                </div>
                </div>
            </div>
        </div>
    </header>

  );
};

export default Header
