import React, { useState } from 'react'

const StarRating = () => {
    const [rating, setRating] = useState(0);
  return (
      <>
          <h1>Start Rating</h1>
          <p>Click the Star and Give Rating...</p>
          {[1, 2, 3, 4, 5].map((star) => (
              <span
                  key='star'
                  onClick={() => setRating(star)}
                  style={{
                      cursor: 'pointer',
                      color: star <= rating ? 'gold' : 'grey',
                      fontSize:'2rem'
                  }}
              >
               ⭐   
              </span>
          ))}
          <p>Your Rating:{rating}/5</p>
      </>
  )
}

export default StarRating