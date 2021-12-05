import { createAsyncThunk } from '@reduxjs/toolkit'

const BASE_USER_URL = `https://connections-api.herokuapp.com`
const userRegister = '/users/signup'
const userLogin = '/users/login'
const userCurrent = '/users/current'
const userLogout = '/users/logout'

export const registerThunk = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userRegister, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      const data = await response.json()
      // console.log('data :>> ', data)
      return data // action.payload
    } catch (err) {
      rejectWithValue({ error: err.message })
    }
  },
)
export const loginThunk = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      const data = await response.json()
      return data // action.payload
    } catch (err) {
      rejectWithValue({ error: err.message })
    }
  },
)
export const currentThunk = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState()
    const persistedToken = state.auth.token

    if (!persistedToken) return rejectWithValue()

    try {
      const response = await fetch(BASE_USER_URL + userCurrent, {
        headers: {
          Authorization: `Bearer ${persistedToken}`,
        },
      })
      const data = await response.json()
      return data // action.payload
    } catch (err) {
      rejectWithValue(err.message)
    }
  },
)

export const logoutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue, getState }) => {
    const state = getState()
    const token = state.auth.token

    if (!token) return

    try {
      await fetch(BASE_USER_URL + userLogout, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (err) {
      rejectWithValue(err.message)
    }
  },
)

// qwe
// qwe@q.com
// qweqweqwe

// user1
// user1@qqq.com
// qweqweqwe
