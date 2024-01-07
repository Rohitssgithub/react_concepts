import React from 'react'
import HigherOrderCom from './HigherOrderCom'
const ChildA = ({count,increfun}) => {
  return (
    <>
    <p>{count}</p>
    <button onClick={increfun}>clicks</button>
    </>
  )
}

export default HigherOrderCom(ChildA)