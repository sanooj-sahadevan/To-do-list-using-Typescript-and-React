import React from 'react'

type Input = {
    type:'text'|"checkbox"|'color'
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>;

}

const input = ({type, inputValue, setInputValue }:Input) => {
    return (
        <div>
            <input type={type} name="" id="" value={inputValue} className='w-full p-2 rounded-sm mb-2' onChange={(event) => setInputValue(event.target.value)} />

        </div>
    )
}

export default input
