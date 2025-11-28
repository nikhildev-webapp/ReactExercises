import React from 'react'

const UserList = () => {
      const styles = {
         Container:{
            border: '1px solid #333',
            display: 'inlineBlock',
            padding: '10px',
            width: '350px',
            margin:'10px'
          },
          li: {
              listStyle:'none'
          }
    }  
    const users = ['Nikhil', 'Harsh', 'Inderjeet', 'Vinay', 'Jatin']
  return (
      <div style={styles.Container}>
          <h3>UserList</h3>
          <div>
              {users.map((id) => (
                  <li key={id} style={styles.li}>{id}</li>
              ))}
          </div>
      </div>
  )
}

export default UserList