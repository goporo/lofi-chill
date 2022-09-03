import React from 'react'

//Small arrow path for connecting popup and menu button
const Path = (props) => {
    return (
        <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" fill={props.color || "rgba(0,0,0,0)"} viewBox="0 0 24 8"
            style={{ position: 'absolute' }}>
            <path d="M0 8c7 0 10-8 12-8s5 8 12 8z"></path>
        </svg>
    )
}

export default Path