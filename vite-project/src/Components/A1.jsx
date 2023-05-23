import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/CalSlice'
const A1 = () => {
    const [num, setnum] = useState("")

    const Dispatch = useDispatch()
    return (
        <div>
            <h1>A1</h1>
            <input value={num} onChange={(event) => { setnum(event.target.value) }} type='text' />
            <button onClick={() => Dispatch(add(num))}>+</button>
        </div>
    )
}

export default A1