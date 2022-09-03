import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { HiQuestionMarkCircle } from 'react-icons/hi';

import {
    Tooltip,
} from 'react-tippy';
import 'react-tippy/dist/tippy.css'


import images from '../assets/images';

var myCounter
const Clock = () => {
    const [tabHasFocus, setTabHasFocus] = useState(true);
    const [totalTime, setTotalTime] = useState(0);
    useEffect(() => {
        const handleFocus = () => {
            setTabHasFocus(true);
        };

        const handleBlur = () => {
            clearInterval(myCounter);
            setTabHasFocus(false);
        };

        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);

        return () => {
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('blur', handleBlur);
        };
    }, [tabHasFocus]);

    useEffect(() => {
        if (tabHasFocus) {
            myCounter = setInterval(() => {
                setTotalTime(prevCount => (prevCount + 1) % 5400);
            }, 1000);
            return () => clearInterval(myCounter);
        }
    }, [tabHasFocus]);

    return (
        <div className='clock-appear'>
            <div className='relative flex mt-16 mb-16 w-full justify-center text-5xl text-white text-shadow tracking-wider'>
                <div>
                    <span className='character-animation'>T </span>
                    <span className='character-animation'>i </span>
                    <span className='character-animation'>m </span>
                    <span className='character-animation mr-5'>e </span>

                    <span className='character-animation'>S </span>
                    <span className='character-animation'>p </span>
                    <span className='character-animation'>e </span>
                    <span className='character-animation'>n </span>
                    <span className='character-animation'>t </span>

                </div>
                <div className="group bg-black rounded-full ml-5 p-0.5 cursor-pointer">
                    <img className='hidden group-hover:block absolute top-20 left-1/2 -translate-x-1/2 rounded-3xl 
                    fade-display' width={400} src={images.pomodoro} alt="" />
                    <span className='hover:opacity-70'><HiQuestionMarkCircle /></span>
                </div>
            </div >
            <div className='flex flex-col items-center mb-5 md:mb-10 '>
                <div className='flex flex-row'>
                    <div className='flex flex-row mr-20'>
                        <div className='shadow-xl shadow-black text-6xl md:text-8xl p-6 md:p-10 mx-3 text-white bg-black 
                                    bg-opacity-75 rounded-xl cursor-pointer hover:opacity-70'>
                            {parseInt(totalTime / 60 / 10)}
                        </div>
                        <div className='shadow-xl shadow-black text-6xl md:text-8xl p-6 md:p-10 mx-3 text-white bg-black 
                                    bg-opacity-75 rounded-xl cursor-pointer hover:opacity-70'>
                            {parseInt(totalTime / 60 % 10)}
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex flex-row'>
                        <div className='shadow-xl shadow-black text-6xl md:text-8xl p-6 md:p-10 mx-3 text-white bg-black 
                                    bg-opacity-75 rounded-xl cursor-pointer hover:opacity-70'>
                            {parseInt(totalTime % 60 / 10)}
                        </div>
                        <div className='shadow-xl shadow-black text-6xl md:text-8xl p-6 md:p-10 mx-3 text-white bg-black 
                                    bg-opacity-75 rounded-xl cursor-pointer hover:opacity-70'>
                            {totalTime % 60 % 10}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Clock