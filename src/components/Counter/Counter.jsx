import React, { useState } from 'react'

const Counter = () => {
      const styles = {
         Container:{
            border: '1px solid #333',
            display: 'inlineBlock',
            padding: '10px',
            width: '350px',
            margin:'10px'
          },
          button: {
              padding: '5px',
              borderRadius: '10px',
              borderColor: '#f01212ff',
              margin:'5px'
          }
    }
    const [count, setCount] = useState(0);
  return (
      <>
          <div style={styles.Container}>
              <h2>Counter</h2>
              <p>Clike the button to increment, decrement and reset the count value</p>
              <p>Count:{count}</p>
              <button style={styles.button} onClick={()=>setCount(count+1)}>Increment</button>
              <button style={styles.button} onClick={()=>setCount(count-1)}>Decrrement</button>
              <button style={styles.button} onClick={()=>setCount(0)}>Reset</button>
         </div>
      </>
  )
}

export default Counter