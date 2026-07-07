import {React, useEffect, useState, useRef} from 'react'


const TestRef = () => {
    const rand = Math.floor(Math.random() * 1000);
    const [count, setCount] = useState(0);
    const ref = useRef(99);
    const elref = useRef(null);
    // console.log('ref', ref.current);

    useEffect(() => {
        console.log('elref', elref.current);
        console.log('ref', ref.current);
        elref.current.style.color = 'red';
    }, [])

    return (
        <div>
            <p ref={elref}>Element Ref:</p>
            <h1>Test Count : {count}</h1>
            <p>Random Number: {rand}</p>
            <p>Ref Value: {ref.current}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button> <br />
            <button onClick={() => {ref.current += 100} }>change Ref</button>
        </div>
    )
}

export default TestRef