import React, { useState } from 'react'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const themeStyles = {
        backgroundColor: isDarkMode ? '#2c2f33' : '#fff',
        color: isDarkMode ? '#fff' : '#000',
        minheight: '100vh',
        display: 'flex',
        flexdirection: 'column',
        alignItems: 'center',
        JustifyContent: 'center',
        transition:'background-color 0.5s, color 0.5s'
    }
  return (
      <div style={themeStyles}>
          <h1>{isDarkMode?'Dark mode Active':'Light mode Active'}</h1>
          <button onClick={()=>setIsDarkMode(!isDarkMode)}>switch to {isDarkMode?'light':'Dark'}</button>
      </div>
  )
}

export default ThemeToggle