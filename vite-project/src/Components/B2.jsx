import React from 'react'
import { useSelector } from "react-redux"
const B2 = () => {
    const value = useSelector((state) => state.CalSlice)
    return (
        <div>
            <h1>B2</h1>
            <h1>{value.num}</h1>
        </div>
    )
}

export default B2