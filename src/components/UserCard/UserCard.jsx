import React from 'react'

const UserCard = ({name,age,profession}) => {
    const styles = {
         Container:{
            border: '1px solid #333',
            display: 'inlineBlock',
            padding: '10px',
            width: '350px',
            margin:'10px'
        }
    }
  return (
      <div style={styles.Container}>
         <h1>Hello:{name}</h1>
         <h3>Age:{age}</h3>
         <h3>Profession:{profession}</h3>
      </div>
  )
}

export default UserCard