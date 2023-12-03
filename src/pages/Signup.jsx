import React, { useRef } from 'react'


import useSignup from '../hooks/useSignup'

function Signup() {
 const { signup, error, user } = useSignup()
 const displayName = useRef()
 const email = useRef()
 const password = useRef()

 
 const handleSubmit = (e) => {
  e.preventDefault()

  signup(displayName.current.value, email.current.value, password.current.value)

  displayName.current.value = ''
  email.current.value = ''
  password.current.value = ''
 }
  
  return (
    <div className='forms'>
    <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input ref={displayName} type="text" />
        </label>
        <label>
          <span>Email:</span>
          <input ref={email} type="email" />
        </label>
        <label>
          <span>Password:</span>
          <input ref={password} type="password" />
        </label>
        <button>Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Signup