import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

// layout
import MainLayout from './layout/MainLayout'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRotues from './components/ProtectedRotues'
import { useGlobalContext } from './hooks/useGlobalContext'

import { auth } from './firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

function App() {
  const { user, dispatch, isAuthChange } = useGlobalContext()
  const roots = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRotues user={user}>
          <MainLayout />
        </ProtectedRotues>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
      ],
    },
    {
      path: 'login',
      element: <>{user ? <Navigate to="/" /> : <Login />}</>,
    },
    {
      path: 'signup',
      element: <>{user ?  <Navigate to="/" /> : <Signup />}</>,
    },
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: 'LOGIN', payload: user })
      dispatch({type: 'IS_AUTH_CHANGE'})
    })
  }, [])
  return <>{isAuthChange && <RouterProvider router={roots} />}</>
}

export default App
