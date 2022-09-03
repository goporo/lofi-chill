import React from 'react'

import { FaGithub, FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaUser, FaExchangeAlt, FaSignOutAlt } from 'react-icons/fa';
import { IoMdCloudUpload, IoMdSettings } from 'react-icons/io';

import Path from './Path';


const PopUp = () => {
    return (
        <div>PopUp</div>
    )
}

const PopWrapper = ({ children }) => {
    return (
        <div className='hidden group-hover:block shadow-lg shadow-black z-20'>
            {children}
        </div>
    )
}

const AboutPop = () => {
    return (
        <PopWrapper>
            <Path color="black" />
            <div className='z-50 text-white bg-black md:bg-black/[.75] absolute top-16 right-0 p-6 rounded-xl fade-display'>
                <h2 className='text-center text-4xl'>About Us</h2>
                <div className='text-xl text-justify mt-5'>my lo213123213fi
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusantium temporibus expedita minima soluta nesciunt, odit pariatur sit quod explicabo repellendus quis, culpa veniam dolores ex tempore voluptas minus perferendis?
                    dawdawdawd awd wad  wa dw ad aw d awd aw daw da
                    chill app help people concentraiting 123 123213 123</div>
                <div className='flex'>
                    <div className="flex mt-10 mb-2">
                        <a className='flex bg-neutral-800 shadow-md shadow-black mr-4 rounded-lg p-2 hover:opacity-70' href='https://github.com/goporo'>
                            <FaGithub className='mr-2' /> Github
                        </a>
                        <a className='flex bg-neutral-800 shadow-md shadow-black mr-4 rounded-lg p-2 hover:opacity-70' href="https://www.facebook.com/goporolo">
                            <FaFacebook className='mr-2' fill='#0a85f3' /> Facebook
                        </a>
                        <a className='flex bg-neutral-800 shadow-md shadow-black mr-4 rounded-lg p-2 hover:opacity-70' href="https://www.youtube.com/channel/UCummc2AW-p46mrzI4iVI4hA/videos">
                            <FaYoutube className='mr-2' fill='red' /> Youtube
                        </a>
                        <a className='flex bg-neutral-800 shadow-md shadow-black mr-4 rounded-lg p-2 hover:opacity-70' href="https://twitter.com/nguyen64526945">
                            <FaTwitter className='mr-2' fill='#1da1f2' /> Twitter
                        </a>
                        <a className='flex bg-neutral-800 shadow-md shadow-black mr-4 rounded-lg p-2 hover:opacity-70' href="https://www.linkedin.com/in/nguyen-phan-337781203/">
                            <FaLinkedin className='mr-2' fill='#0a66c2' /> Linkedin
                        </a>
                    </div>
                </div>
            </div>
        </PopWrapper>
    )
}

const MenuPop = () => {
    return (
        <PopWrapper>
            <Path color="black" />
            <div className='z-50 text-white bg-black md:bg-black/[.75] absolute top-16 right-0 rounded-xl 
                fade-display min-w-max pr-10'>
                <div className="flex flex-col py-1">
                    <button className='flex p-5 hover:opacity-70'>
                        <FaUser /> <span className='ml-5'>Log In</span>
                    </button>
                    <button className='flex p-5 hover:opacity-70'>
                        <IoMdCloudUpload /> <span className='ml-5'>Upload</span>
                    </button>
                    <button className='flex p-5 hover:opacity-70'>
                        <IoMdSettings /> <span className='ml-5'>Setting</span>
                    </button>
                    <button className='flex p-5 hover:opacity-70'>
                        <FaExchangeAlt /> <span className='ml-5'>Change Theme</span>
                    </button>
                    <button className='flex p-5 hover:opacity-70'>
                        <FaSignOutAlt /> <span className='ml-5'>Log Out</span>
                    </button>
                </div>
            </div>
        </PopWrapper>
    )
}


export { AboutPop, MenuPop }
export default PopUp