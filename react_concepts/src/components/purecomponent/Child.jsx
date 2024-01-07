import React, { memo } from 'react'

const Child = () => {
    console.log('child')
    return (
        <>
            <div>Child</div>
        </>
    )
}

export default memo(Child)