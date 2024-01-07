import React, { forwardRef, useRef } from 'react'

const ChildForwardRefCom = forwardRef((props, ref) => {
    return (
        <>
            <input type="text" ref={ref} />
        </>
    )
})


export default ChildForwardRefCom