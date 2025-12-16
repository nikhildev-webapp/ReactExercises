import React, { useState } from 'react'

const ColorPicker = () => {
    const [backgroundColor, setBackgroundColor] = useState('black');
    const handleClick = (color) => {
        setBackgroundColor(color);
    }; 
  return (
      <>
            <div className="picker-container">
            <div className="controls">
                <button 
                    onClick={() => handleClick('red')} 
                    style={{ backgroundColor: 'red' }}
                >
                    Red
                </button>
                <button 
                    onClick={() => handleClick('blue')} 
                    style={{ backgroundColor: 'blue' }}
                >
                    Blue
                </button>
                <button 
                    onClick={() => handleClick('green')} 
                    style={{ backgroundColor: 'green' }}
                >
                    Green
                </button>
                <button 
                    onClick={() => handleClick('yellow')} 
                    style={{ backgroundColor: 'yellow', color: 'black' }}
                >
                    Yellow
                </button>
            </div>

           
            <div 
                className="color-box" 
                style={{ backgroundColor: backgroundColor }}
            >
                The box color is currently: {backgroundColor}
            </div>
        </div>   
      </>
  )
}

export default ColorPicker