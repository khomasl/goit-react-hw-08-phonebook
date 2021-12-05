import './App.css'
import * as React from 'react'
import { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
// import { ApiProvider } from '@reduxjs/toolkit/query/react'
// import { contactsApi } from './redux/contacts/contactsSlice'
import AppBar from './components/AppBar/AppBar'
import LoaderSpinner from './components/Loader/Loader'
import { PublicRoute } from './Routes/PublicRoute'
import { PrivateRoute } from './Routes/PrivateRoute'
import { currentThunk } from './redux/users/usersThunks'
import {
  isAuth,
  isLogin,
  isFetchingCurrentUser,
} from './redux/users/usersSelectors'
// import s from 'App.css'

const Home = lazy(() => import('./Pages/Home'))
const Contacts = lazy(() => import('./Pages/Contacts'))
const Register = lazy(() => import('./Pages/Register'))
const Login = lazy(() => import('./Pages/Login'))

export default function App() {
  const isAuth_ = useSelector(isAuth)
  const isFetchingCurrentUser_ = useSelector(isFetchingCurrentUser)
  const isLogin_ = useSelector(isLogin)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentThunk())
  }, [dispatch])

  return (
    !isFetchingCurrentUser_ && (
      <>
        <div className="App">
          <AppBar />

          <main>
            <Suspense fallback={<LoaderSpinner />}>
              <Routes>
                <Route
                  path="/"
                  element={<PublicRoute isAuth={isAuth_} component={Home} />}
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute isAuth={isAuth_} component={Contacts} />
                  }
                />
                <Route
                  path="/register"
                  element={
                    <PublicRoute
                      isAuth={isAuth_}
                      restricted
                      component={Register}
                    />
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PublicRoute
                      isAuth={isAuth_}
                      restricted
                      component={Login}
                    />
                  }
                />
                <Route
                  path="*"
                  element={<PublicRoute isAuth={isAuth_} component={Home} />}
                />
              </Routes>
            </Suspense>
          </main>
        </div>
      </>
    )
  )
}
