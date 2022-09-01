import React from 'react'
import images from '../assets/images'
import { HiMenu } from "react-icons/hi";

const Header = () => {
    return (
        <header>
            <div className="flex flex-row items-center justify-between mx-20">
                <img className='cursor-pointer' width={180} height={100} src={images.logo} alt="logo" />
                <div className='flex flex-row '>
                    <div>
                        <div className='text-3xl mx-3 p-3 text-white bg-black 
                        bg-opacity-75 rounded-xl cursor-pointer hover:opacity-70'>
                            <HiMenu />
                        </div>
                    </div>
                    <div>
                        <div className='text-3xl mx-3 p-3 text-white bg-black 
                        bg-opacity-75 rounded-xl cursor-pointer hover:opacity-70'>
                            <HiMenu />
                        </div>
                    </div>
                    <div>
                        <div className='text-3xl mx-3 p-3 text-white bg-black 
                        bg-opacity-75 rounded-xl cursor-pointer hover:opacity-70'>
                            <HiMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header