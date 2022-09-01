import React from 'react'
import audios from '../assets/audios'
import images from '../assets/images'
import Clock from './Clock'
import lof from "../assets/audios/lofi0.mp3"
import { useState } from 'react'
import { useRef } from 'react'

import { HiOutlinePlay, HiOutlineRewind, HiOutlineFastForward, HiOutlinePause } from "react-icons/hi";


const Content = () => {

    const [isPlay, setPlay] = useState(false);
    const audioRef = useRef();

    const handleLoadedData = () => {
        // setDuration(audioRef.current.duration);
        if (isPlay) audioRef.current.play();
    };

    const handlePausePlayClick = () => {
        if (isPlay) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlay(!isPlay);
    };

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <Clock />
            <audio
                ref={audioRef}
                src={audios.lofi0.src}
                onLoadedData={handleLoadedData}
            />
            <div className='flex flex-col justify-center items-center  text-white'>
                <h2 className='quicksand mb-5 text-5xl'>
                    {isPlay ? audios.lofi0.name : <br />}</h2>
                <div className="flex text-6xl">
                    <button>
                        <HiOutlineRewind />
                    </button>
                    <button
                        className='text-8xl mx-5'
                        onClick={handlePausePlayClick} >
                        {isPlay ? <HiOutlinePause /> : <HiOutlinePlay />}

                    </button>

                    <button>
                        <HiOutlineFastForward />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Content