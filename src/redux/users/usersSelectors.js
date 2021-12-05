//export const getFilter = (state) => state.filter.filter
export const getUserName = (state) => state?.auth?.user?.name ?? ''
export const getUserEmail = (state) => state?.auth?.user?.email ?? ''
export const getUserToken = (state) => state?.auth?.token ?? null
export const isLogin = (state) => state?.auth?.isLoggedIn ?? false
export const isAuth = (state) => state?.auth?.isAuth ?? false
export const isFetchingCurrentUser = (state) =>
  state?.auth?.isFetchingCurrentUser ?? false
