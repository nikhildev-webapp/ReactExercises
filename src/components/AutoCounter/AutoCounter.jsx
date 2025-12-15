import React, { useState,useEffect } from 'react'

const AutoCounter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
         setCount(prevCount=>prevCount+1)
        }, 1000)
        return ()=>{clearInterval(intervalId)}
    },[])
    

    return (
    //   cereate a auto counter where count value increase automatically-using useeffect
        <>
            <h1>Auto Counter</h1>
            <p>Value of count increase every 1 second</p>
            <p>Count Value:<strong>{count}</strong></p>
        </>
  )
}

export default AutoCounter