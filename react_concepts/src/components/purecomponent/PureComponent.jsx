import React, { useState } from 'react';
import Child from '../purecomponent/Child';

const PureComponent = () => {

    let [count, setCount] = useState(0);
    let [todo, setTodo] = useState([])
    return (
        <>
            <p>{count}</p>a
            <button onClick={() => setCount(count + 1)}>click</button>
            <Child todo={todo}></Child>
            <button onClick={() => {
                setTodo([...todo, 'new'])
            }}>click</button>
        </>
    )
}

export default PureComponent