import React, { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    // const [counter, setCounter] = React.useState(0);

    const modifyCounter = (element) => setCounter(prevCounter => prevCounter + element)

    const elementPlus = element => {
        if (element > 0){
            element = "+" + element
        }
        return element
    }
    
    return (
        <>
        <h1>{counter}</h1>

        {[+1, +5, +50, -1, -5, -50].map(element => (
            <button onClick={() => modifyCounter(element)}>sync {elementPlus(element)}</button>
        ))}

        <button onClick={() => setTimeout(() => modifyCounter(1), 2000)}>
            async +1
        </button>
        </>
    )
}

export default Counter