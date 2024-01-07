import React from 'react'
import HigherOrderCom from './HigherOrderCom'
const ChildB = ({ count, increfun }) => {
    return (
        <>
            <p>{count}</p>
            <button onMouseOver={increfun}>click</button>
        </>
    )
}

export default HigherOrderCom(ChildB)