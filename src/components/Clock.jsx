import React from 'react'

const Clock = () => {
    return (
        <div className='flex mb-10'>
            <div className='flex flex-row mr-20'>
                <div className='text-8xl mx-3 p-10 text-white bg-black 
            bg-opacity-75 rounded-xl cursor-pointer hover:opacity-70'>
                    2
                </div>
                <div className='text-8xl mx-3 p-10 text-white bg-black 
            bg-opacity-75 rounded-xl cursor-pointer hover:opacity-70'>
                    1
                </div>
            </div>
            {/*  */}
            <div className='flex flex-row'>
                <div className='text-8xl mx-3 p-10 text-white bg-black 
            bg-opacity-75 rounded-xl cursor-pointer hover:opacity-70'>
                    3
                </div>
                <div className='text-8xl mx-3 p-10 text-white bg-black 
            bg-opacity-75 rounded-xl cursor-pointer hover:opacity-70'>
                    0
                </div>
            </div>
        </div>
    )
}

export default Clock