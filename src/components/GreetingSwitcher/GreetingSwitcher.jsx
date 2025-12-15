import React, { useState } from 'react'

const GreetingSwitcher = () => {
    const [greetingType, setGreetingType] = useState('morning');

    const toggleGreeting = () => {
        if (greetingType === 'morning') {
            setGreetingType('evening')
        } else {
            setGreetingType('morning')
        }
    }

    const message = greetingType === 'morning' ? 'GoodMorning' : 'GoodEvening'
    const buttonText=greetingType==='morning'?'Switch to Evening':'Switch to Morning'
  return (
      <>
          <h2>Greeting Switcher</h2>
          <p><strong>{message}</strong></p>
          <button onClick={toggleGreeting}>{buttonText}</button>
      </>
  )
}

export default GreetingSwitcher