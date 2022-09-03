import React from 'react'

import { FaGithub, FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaUser, FaExchangeAlt, FaSignOutAlt } from 'react-icons/fa';
import { IoMdCloudUpload, IoMdSettings } from 'react-icons/io';
import store, { updateTheme } from '../app/store';
import Path from './Path';




const PopUp = () => {
    return (
        <div>PopUp</div>
    )
}

const PopWrapper = ({ children }) => {
    return (
        <div className='hidden group-hover:block shadow-lg shadow-black z-20 overflow-hidden'>
            {children}
        </div>
    )
}

const AboutPop = () => {
    return (
        <PopWrapper>
            <Path color="" />
            <div className='z-50 max-w-xl md:max-w-none overflow-hidden text-white bg-black md:bg-black/[.75] absolute top-24 md:top-16 right-12 md:right-0 p-6 rounded-xl fade-display'>
                <h2 className='text-center text-4xl font-bold'>About Us</h2>
                <div className='text-2xl text-justify mt-5'>As a student, i understand how difficult it is to just sit at your desk and focus. Especially when you have too many distractions,
                    Lofi Chill Web is made to be a solution for it. The app contains 10+ free themes and musics for concentrating and working late night. <br /><br />
                    If you found it helpful, don't forget to give a star to my github source code to stay updated!
                </div>
                <div className='flex '>
                    <div className="flex flex-wrap md:flex-nowrap mt-10 mb-2">
                        <a target="_blank" rel="noreferrer" className='flex bg-neutral-800 shadow-md shadow-black mr-4 mb-2 rounded-lg p-2 hover:opacity-70' href='https://github.com/goporo'>
                            <FaGithub className='mr-2' /> Github
                        </a>
                        <a target="_blank" rel="noreferrer" className='flex bg-neutral-800 shadow-md shadow-black mr-4 mb-2 rounded-lg p-2 hover:opacity-70' href="https://www.facebook.com/profile.php?id=100080407271213">
                            <FaFacebook className='mr-2' fill='#0a85f3' /> Facebook
                        </a>
                        <a target="_blank" rel="noreferrer" className='flex bg-neutral-800 shadow-md shadow-black mr-4 mb-2 rounded-lg p-2 hover:opacity-70' href="https://www.youtube.com/channel/UCummc2AW-p46mrzI4iVI4hA/videos">
                            <FaYoutube className='mr-2' fill='red' /> Youtube
                        </a>
                        <a target="_blank" rel="noreferrer" className='flex bg-neutral-800 shadow-md shadow-black mr-4 mb-2 rounded-lg p-2 hover:opacity-70' href="https://twitter.com/nguyen64526945">
                            <FaTwitter className='mr-2' fill='#1da1f2' /> Twitter
                        </a>
                        <a target="_blank" rel="noreferrer" className='flex bg-neutral-800 shadow-md shadow-black mr-4 mb-2 rounded-lg p-2 hover:opacity-70' href="https://www.linkedin.com/in/nguyen-phan-337781203/">
                            <FaLinkedin className='mr-2' fill='#0a66c2' /> Linkedin
                        </a>
                    </div>
                </div>
            </div>
        </PopWrapper>
    )
}

const MenuPop = () => {
    const handleChangeTheme = () => {
        store.dispatch(updateTheme())
    }

    return (
        <PopWrapper>
            <Path color="" />
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
                    <button className='flex p-5 hover:opacity-70'
                        onClick={handleChangeTheme}
                    >
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