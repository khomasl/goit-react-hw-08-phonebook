//RTK Query -> API Reference -> createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_CONTACTS_URL = 'https://connections-api.herokuapp.com/'
// const BASE_CONTACTS_URL = 'https://61a0fd716c3b400017e69b4d.mockapi.io/api/v1/'
const contacts_endpoint = 'contacts/'

export const contactsApi = createApi({
  tagTypes: ['Contacts'],
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_CONTACTS_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  /////
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => contacts_endpoint,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'Contacts',
                id,
              })),
            ]
          : [{ type: 'Contacts' }],
      invalidatesTags: ['Contacts'],
    }),
    //////////
    addNewContact: builder.mutation({
      query: (contact) => ({
        method: 'POST',
        url: contacts_endpoint,
        body: contact,
        // body: !findContact(api.getState(), contact.name) ? contact : null,
      }),
      invalidatesTags: ['Contacts'],
    }),
    ///////
    deleteContact: builder.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `${contacts_endpoint}${id}`,
      }),
      invalidatesTags: (res, err, id) => [{ type: 'Contacts', id }],
    }),
  }),
})

export const {
  useGetContactsQuery,
  useAddNewContactMutation,
  useDeleteContactMutation,
} = contactsApi
