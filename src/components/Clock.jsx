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
        <>
            <div className='flex mt-20 mb-20 ml-4 text-5xl text-white text-shadow tracking-wider'>
                T i m e &nbsp;&nbsp;&nbsp;S p e n t
                <Tooltip
                    position='bottom-'
                    html={(
                        <div>
                            <img src={images.pomodoro} alt="" />
                        </div>
                    )}
                >
                    <div className="bg-black rounded-full ml-5 p-0.5 cursor-pointer hover:opacity-70">
                        <span className=''><HiQuestionMarkCircle /></span>
                    </div>
                </Tooltip>

            </div >
            <div className='flex mb-5 md:mb-10 '>
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
        </>
    )
}


export default Clock