import React, { useState } from 'react'

const PasswordVisibility = () => {
    const [passwordType, setPasswordType] = React.useState('password');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        if (passwordType === 'password') {
            setPasswordType('text')
        }else{
            setPasswordType('password')
        }
    }
  return (
      <>
          <div>
              <h2>Passwor Visibility</h2>
              <div>
                  <label htmlFor="password">Password:</label>
                  <input type={passwordType}
                      id='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Enter your Password'
                      style={{marginLeft:'10px',marginRight:'10px'}}
                  />
                  <label>
                      <input type="checkbox" checked={passwordType === 'text'}
                      onChange={togglePasswordVisibility}
                      />
                      show Password
                  </label>
              </div>
          </div>
      </>
  )
}

export default PasswordVisibility