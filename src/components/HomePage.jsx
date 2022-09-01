import React from 'react'
import { useState } from 'react';
import Content from './Content';
import Header from './Header';

const HomePage = (props) => {
    const { img } = props
    const [darkToggle, setDarkToggle] = useState(false)
    const [bgImg, setBgImg] = useState(img)
    return (

        <div style={{ backgroundImage: `url(${bgImg})` }}
            className={`app h-screen bg-cover bg-no-repeat ${darkToggle && 'dark'}`}>
            <Header />
            <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
            <div className="text-gray-800 dark:text-gray-200 font-bold text-xl mb-2">
                The Coldest Sunset
            </div>
            <Content />
        </div >
    )
}

export default HomePage