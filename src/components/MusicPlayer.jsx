import React, { useState, useRef } from 'react'

import { HiOutlinePlay, HiOutlineRewind, HiOutlineFastForward, HiOutlinePause, HiVolumeOff, HiVolumeUp, HiMusicNote } from "react-icons/hi";
import { useEffect } from 'react'

import audios from '../assets/audios'

const MusicPlayer = () => {
    var hiShadow = "drop-shadow(3px 3px 1px rgba(0,0,0,0.25))"
    const [volume, setVolume] = useState(0.7)
    const [oldVolume, setOldVolume] = useState(0.7)
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
        setAudioIndex(audioIndex === 0 ? audios.length - 1 : audioIndex - 1)
    }
    const handleForwardAudio = () => {
        setAudioIndex(audioIndex < audios.length - 1 ? audioIndex + 1 : 0)
    }

    useEffect(() => { audioRef.current.volume = volume }, [volume])

    return (
        <div className='absolute bottom-20'>
            <audio
                autoPlay
                ref={audioRef}
                src={audios[audioIndex].src}
                onLoadedData={handleLoadedData}
                onEnded={handleForwardAudio}
            />
            <div className='flex flex-col justify-center items-center text-white'>
                <h2 className='quicksand text-shadow mb-5 text-3xl md:text-5xl animate-pulse'>
                    {isPlay ?
                        (<div className='flex'>
                            <span>{audios[audioIndex].name}</span>
                            &nbsp;♪
                        </div>)
                        :
                        <br />}
                </h2>
                <div className="flex text-6xl opacity-90">
                    <button className="hover:opacity-70"
                        onClick={handleRewindAudio}>
                        {isPlay ? <HiOutlineRewind filter={hiShadow} /> : null}
                    </button>
                    <button
                        className='text-8xl mx-5 hover:opacity-70'
                        onClick={handlePausePlayClick} >
                        {isPlay ? <HiOutlinePause filter={hiShadow} /> : <HiOutlinePlay filter={hiShadow} className='opacity-90' />}

                    </button>
                    <button className='hover:opacity-70'
                        onClick={handleForwardAudio}>
                        {isPlay ? <HiOutlineFastForward filter={hiShadow} /> : null}
                    </button>
                </div>
                {
                    isPlay ?
                        <div className="flex flex-row mt-5 ">
                            <button
                                onClick={() => {
                                    setOldVolume(volume)
                                    volume === 0 ? setVolume(oldVolume) : setVolume(0)
                                }}
                                className='text-3xl cursor-pointer hover:opacity-70'>
                                {volume > 0 ? <HiVolumeUp filter={hiShadow} /> : <HiVolumeOff filter={hiShadow} />}
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
                        : <div style={{ marginBottom: 31.25 }} />
                }
            </div >
        </div >
    )
}

export default MusicPlayer