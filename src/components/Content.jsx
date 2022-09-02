import React from 'react'
import Clock from './Clock'

import audios from '../assets/audios'
import { useState } from 'react'
import { useRef } from 'react'

import { useEffect } from 'react'
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