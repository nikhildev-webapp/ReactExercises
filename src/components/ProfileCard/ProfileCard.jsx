import React from 'react'

const ProfileCard = ({ avatar, name, role }) => {
   const styles= {
        card: {
            border:'1px solid #ccc',
            borderRadius:'8px',
           padding: '16px',
           maxWidth: '300px',
              display:'flex',
           flexDirection: 'column',
                margin: '16px auto',
           alignItems: 'center',
           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
       },
    }
  return (
      <>
          <div style={styles.card}>
              <h1>ProfileCard</h1>
              <div>Avatar:{avatar}</div>
              <div>
                  Name:{name}
              </div>
              <div>
                  Role:{role}
              </div>
          </div>
      </>
  )
}

export default ProfileCard