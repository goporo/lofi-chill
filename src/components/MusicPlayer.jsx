import React from 'react'

import audios from '../assets/audios'
import { useState } from 'react'
import { useRef } from 'react'

import { HiOutlinePlay, HiOutlineRewind, HiOutlineFastForward, HiOutlinePause, HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { useEffect } from 'react'

const MusicPlayer = () => {
    const [volume, setVolume] = useState(0.5)
    const [oldVolume, setOldVolume] = useState(0.5)
    const [isPlay, setPlay] = useState(false);
    const [audioIndex, setAudioIndex] = useState(0);
    const audioRef = useRef();

    const handleLoadedData = () => {
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

    const handleRewindAudio = () => {
        setAudioIndex((audioIndex - 1) % audios.length)
    }
    const handleForwardAudio = () => {
        setAudioIndex((audioIndex + 1) % audios.length)
    }

    useEffect(() => { audioRef.current.volume = volume }, [volume])

    return (
        <div className='absolute bottom-20'>
            <audio
                onEnded={handleForwardAudio}
                ref={audioRef}
                src={audios[audioIndex].src}
                onLoadedData={handleLoadedData}
            />
            <div className='flex flex-col justify-center items-center  text-white'>
                <h2 className='quicksand text-shadow mb-5 text-3xl md:text-5xl'>
                    {isPlay ? audios[audioIndex].name : <br />}</h2>
                <div className="flex text-6xl">
                    <button className="hover:opacity-70"
                        onClick={handleRewindAudio}>
                        <HiOutlineRewind />
                    </button>
                    <button
                        className='text-8xl mx-5 hover:opacity-70 '
                        onClick={handlePausePlayClick} >
                        {isPlay ? <HiOutlinePause /> : <HiOutlinePlay />}

                    </button>
                    <button className='hover:opacity-70'
                        onClick={handleForwardAudio}>
                        <HiOutlineFastForward />
                    </button>
                </div>
                <div className="flex flex-row mt-5 ">
                    <button
                        onClick={() => {
                            setOldVolume(volume)
                            volume === 0 ? setVolume(oldVolume) : setVolume(0)
                        }}
                        className='text-3xl cursor-pointer'>
                        {volume > 0 ? <HiVolumeUp /> : <HiVolumeOff />}
                    </button>
                    <input
                        className='ml-2 cursor-pointer'
                        type="range"
                        min={0}
                        max={1}
                        step={0.02}
                        value={volume}
                        onChange={event => {
                            setVolume(event.target.valueAsNumber)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer