import { FullScreen } from '@chiragrupani/fullscreen-react';
import React from 'react'
import { useState } from 'react';
import Content from './Content';
import Header from './Header';




const HomePage = (props) => {

    const { img } = props
    const [darkToggle, setDarkToggle] = useState(false)
    const [bgImg, setBgImg] = useState(img)
    const [isFullScreen, setFullScreen] = useState(false)

    const handleFullScreen = () => {
        setFullScreen(!isFullScreen)
    }

    return (

        <FullScreen
            isFullScreen={isFullScreen}>
            {/* <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} /> */}
            <div style={{ backgroundImage: `url(${bgImg})` }}
                className={`app h-screen bg-cover bg-no-repeat ${darkToggle && 'dark'}`}>
                <Header updateFullScreen={handleFullScreen} />
                <Content />
            </div >
        </FullScreen>



    )
}

export default HomePage