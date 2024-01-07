import React, { useState } from 'react'

const HigherOrderCom = (WrappedComponent) => {
    function mainfun() {

        let [count, setCount] = useState(0)
        function increfun() {
            setCount(count + 1)
        }
        return <WrappedComponent count={count} increfun={increfun} />
    }
    return mainfun
}

export default HigherOrderCom