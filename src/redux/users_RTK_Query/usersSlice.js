//RTK Query -> API Reference -> createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_USER_URL = 'https://connections-api.herokuapp.com'
const userRegister_endpoint = '/users/signup'
const userLogin_endpoint = '/users/login'
const userLogout_endpoint = '/users/logout'
const userCurrent_endpoint = '/users/current'
// const BASE_CONTACTS_URL = 'https://61a0fd716c3b400017e69b4d.mockapi.io/api/v1/'

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
}

export const usersApi = createApi({
  tagTypes: ['User'],
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_USER_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token
      console.log('token_usersApi :>> ', token)
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      console.log('headers :>> ', headers)
      return headers
    },
  }),
  /////
  endpoints: (builder) => ({
    //*********** */
    getUser: builder.query({
      query: () => userCurrent_endpoint,
      // providesTags: (result) =>
      //   result
      //     ? [
      //         ...result.map(({ id }) => ({ type: 'User', id })),
      //         { type: 'User', id: 'LIST' },
      //       ]
      //     : [{ type: 'User', id: 'LIST' }],
    }),
    //*************** */
    registerUser: builder.mutation({
      query: (user) => ({
        method: 'POST',
        url: userRegister_endpoint,
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    //*************** */
    loginUser: builder.mutation({
      query: (user) => ({
        method: 'POST',
        url: `${userLogin_endpoint}`,
        body: user,
        providesTags: ['User'],
      }),
      invalidatesTags: ['User'],
    }),
    //*************** */
    logoutUser: builder.mutation({
      query: () => ({
        method: 'POST',
        url: `${userLogout_endpoint}`,
      }),
      //invalidatesTags: (res, err, id) => [{ type: 'Users', id }],
    }),
  }),
})

export const {
  useGetUserQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = usersApi

//qwe
//qwe@q.com
//qweqweqwe
//token(pin):
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWEzZmIyZDZiN2YyODAwMTUwMjc3YjkiLCJpYXQiOjE2MzgxMzY2MjF9.eUsui2Mqb29MuPVouCApAO7ku0fzgvlV5qr7kOIbsiA"
