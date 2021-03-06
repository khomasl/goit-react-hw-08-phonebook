import { createSlice } from '@reduxjs/toolkit'
import {
  registerThunk,
  loginThunk,
  currentThunk,
  logoutThunk,
} from './usersThunks'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: '',
    error: null,
    isLoading: false,
    isAuth: false,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
    myProp: 'Hello',
  },
  reducers: {
    renameProp: (state, action) => {
      return {
        ...state,
        myProp: action.payload,
      }
    },
  },
  extraReducers: {
    [registerThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      }
    },
    [registerThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
      }
    },
    [registerThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    },
    //*************** */
    [loginThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        // isFetchingCurrentUser: true,
      }
    },
    [loginThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
        isLoggedIn: true,
        // isFetchingCurrentUser: false,
      }
    },
    [loginThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        // isFetchingCurrentUser: false,
      }
    },
    //********** */
    [currentThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        isFetchingCurrentUser: true,
      }
    },
    [currentThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuth: true,
        // isLoggedIn: true,
        isFetchingCurrentUser: false,
      }
    },
    [currentThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: false,
        // isLoggedIn: false,
        isFetchingCurrentUser: false,
      }
    },
    //********************** */
    [logoutThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      }
    },
    [logoutThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: { name: '', email: '' },
        token: '',
        isAuth: false,
        isLoggedIn: false,
      }
    },
    [logoutThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    },
  },
})
export const { renameProp } = authSlice.actions
export default authSlice.reducer
