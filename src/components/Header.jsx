import React from 'react'
import images from '../assets/images'
import { HiMenu, HiQuestionMarkCircle } from "react-icons/hi";
import { MdFullscreen } from "react-icons/md";
import { Tooltip } from 'react-tippy';
import { AboutPop, MenuPop } from '../common/PopUp';


const Header = (props) => {


    return (
        <header className='header-appear'>
            <div className="flex flex-row items-center justify-between mx-0 md:mx-10">
                <Tooltip
                    title='Logo from Lofi.co'
                    distance={-5}
                >
                    <img className='cursor-pointer hover:opacity-80' width={110} src={images.logo} alt="logo" />
                </Tooltip>
                <div className='flex flex-row '>
                    <div className='md:relative group' >
                        <button className=' text-3xl mx-3 p-3 text-white bg-black 
                            bg-opacity-75 rounded-xl cursor-pointer hover:opacity-70'
                        >
                            <HiQuestionMarkCircle />
                        </button>
                        <AboutPop />
                    </div>
                    <Tooltip
                        title='Full Screen'
                    >
                        <div className='hidden lg:block'>
                            <button className='text-3xl mx-3 p-3 text-white bg-black 
                            bg-opacity-75 rounded-xl cursor-pointer hover:opacity-70'
                                onClick={props.updateFullScreen}
                            >
                                <MdFullscreen />
                            </button>

                        </div>
                    </Tooltip>

                    <div className='relative group' >
                        <button className='text-3xl mx-3 p-3 text-white bg-black 
                            bg-opacity-75 rounded-xl cursor-pointer hover:opacity-70'>
                            <HiMenu />
                        </button>
                        <MenuPop />
                    </div>

                </div>
            </div >
        </header >
    )
}

export default Header