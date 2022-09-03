import React from 'react'

import Clock from './Clock'
import MusicPlayer from './MusicPlayer'


const Content = () => {


    return (
        <div className='h-screen flex flex-col items-center'>
            <Clock />
            <MusicPlayer />
        </div>
    )
}

export default Content