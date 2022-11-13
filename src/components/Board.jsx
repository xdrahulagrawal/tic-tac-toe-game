import React from 'react'
import Square from './Square'
import '../assests/styles/board.css'

function Board() {
    return (
        <div className='board-container'>
            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    )
}

export default Board