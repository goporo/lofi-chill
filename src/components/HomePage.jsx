import { FullScreen } from '@chiragrupani/fullscreen-react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import Content from './Content';
import Header from './Header';
import images from '../assets/images';



const HomePage = () => {
    const [darkToggle, setDarkToggle] = useState(false)
    const [isFullScreen, setFullScreen] = useState(false)
    const lofiIdx = useSelector((state) => state.lofiIdx)
    const handleFullScreen = () => {
        setFullScreen(!isFullScreen)
    }

    return (
        <FullScreen
            isFullScreen={isFullScreen}>
            <div style={{ backgroundImage: `url(${images.lofis[lofiIdx].img})` }}
                className={`app fade-display h-screen bg-cover bg-no-repeat ${darkToggle && 'dark'}`}>
                <Header updateFullScreen={handleFullScreen} />
                <Content />
            </div >
        </FullScreen>
    )
}

export default HomePage