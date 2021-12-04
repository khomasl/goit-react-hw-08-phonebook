import './App.css'
import * as React from 'react'
// import { ApiProvider } from '@reduxjs/toolkit/query/react'
// import { contactsApi } from './redux/contacts/contactsSlice'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contacts from './Pages/Contacts'
import Register from './Pages/Register'
import Login from './Pages/Login'
import { PublicRoute } from './Routes/PublicRoute'
import { PrivateRoute } from './Routes/PrivateRoute'
import AppBar from './components/AppBar/AppBar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { currentThunk } from './redux/users/usersThunks'
import { useSelector } from 'react-redux'
import { isAuth, isLogin } from './redux/users/usersSelectors'

// import s from 'App.css'

export default function App() {
  const isAuth_ = useSelector(isAuth)
  // const isLogin_ = useSelector(isLogin)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentThunk())
  }, [dispatch])

  return (
    <>
      <div className="App">
        <AppBar />

        <main>
          <Routes>
            <Route
              path="/"
              element={<PublicRoute isAuth={isAuth_} component={Home} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute isAuth={isAuth_} component={Contacts} />}
            />
            <Route
              path="/register"
              element={<PublicRoute isAuth={isAuth_} component={Register} />}
            />
            <Route
              path="/login"
              element={<PublicRoute isAuth={isAuth_} component={Login} />}
            />
            <Route
              path="*"
              element={<PublicRoute isAuth={isAuth_} component={Home} />}
            />
          </Routes>
        </main>
      </div>
    </>
  )
}
