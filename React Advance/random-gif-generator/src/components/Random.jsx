import React, { useState } from 'react'

function Random() {
    const [gif, setGif] = useState("");

    function clickHandler() {

    }

    return (
        <div className='w-1/2 h-[450px] bg-green-500 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>
            <img src={gif} width="450" alt='random gif' />
            <button
                className='bg-yellow-200 text-lg py-2 rounded-lg w-10/12'
                onClick={clickHandler}>GENERATE</button>
        </div>
    )
}

export default Random
