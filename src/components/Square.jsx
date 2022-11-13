import React from 'react'
import '../assests/styles/square.css'

function Square({ticTac,onClick}) {
    return (
        <div className='square-container' onClick={onClick}>
            <h1>{ticTac}</h1>
        </div>
    )
}

export default Square