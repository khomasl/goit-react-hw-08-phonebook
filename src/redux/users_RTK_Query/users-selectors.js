//export const getFilter = (state) => state.filter.filter
export const getName = (state) => state
// .usersApi.data.user.name
export const getToken = (state) =>
  state?.usersApi?.mutations?.data?.token ?? null
//export const isLogin = (state) => state.data.isLoggedIn
