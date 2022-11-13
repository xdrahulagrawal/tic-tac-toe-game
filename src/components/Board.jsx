import React, { useState } from 'react'
import Square from './Square'
import '../assests/styles/board.css'

function Board() {
    const [ticTac, setTicTac] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true)

    const _handleClick = (index) => {
        if (ticTac[index] !== null) {
            return;
        }
        const copyTicTac = [...ticTac]
        copyTicTac[index] = isXTurn ? 'X' : '0'
        setTicTac(copyTicTac)
        setIsXTurn(!isXTurn)
    }

    const _checkWinner = () => {
        const winnerArray = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let logic of winnerArray) {
            const [a, b, c] = logic;
            if (ticTac[a] !== null && ticTac[a] === ticTac[b] && ticTac[a] === ticTac[c]) {
                return ticTac[a];
            }
        }
        return false;

    }

    const _handleResetGame = () => {
        setTicTac(Array(9).fill(null))
    }
    const isWinner = _checkWinner();
    return (
        <div className='board-container'>
            {isWinner ? <>
                {isWinner} won the game{" "}
                <button onClick={_handleResetGame}>Play Again</button>
            </> : <>
                <h1>{isXTurn ? 'X' : '0'} Your turn</h1>
                <div className='board-row'>
                    <Square ticTac={ticTac[0]} onClick={() => _handleClick(0)} />
                    <Square ticTac={ticTac[1]} onClick={() => _handleClick(1)} />
                    <Square ticTac={ticTac[2]} onClick={() => _handleClick(2)} />
                </div>
                <div className='board-row'>
                    <Square ticTac={ticTac[3]} onClick={() => _handleClick(3)} />
                    <Square ticTac={ticTac[4]} onClick={() => _handleClick(4)} />
                    <Square ticTac={ticTac[5]} onClick={() => _handleClick(5)} />
                </div>
                <div className='board-row'>
                    <Square ticTac={ticTac[6]} onClick={() => _handleClick(6)} />
                    <Square ticTac={ticTac[7]} onClick={() => _handleClick(7)} />
                    <Square ticTac={ticTac[8]} onClick={() => _handleClick(8)} />
                </div>
            </>}
        </div>
    )
}

export default Board