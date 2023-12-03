import { useState } from 'react'
import { auth } from '../firebase/firebaseConfig'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

function useSignup() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const signup = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async(user) => {
        await updateProfile(auth.currentUser, {
          displayName,
        })
        setUser(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        setError(errorMessage)
        console.log(errorCode, errorMessage)
      })
  }

  return { user, error, signup }
}

export default useSignup
