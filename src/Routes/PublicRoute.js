import { Navigate } from 'react-router'
export function PublicRoute({
  isAuth,
  restricted = false,
  component: Component,
}) {
  return (
    <>{isAuth && restricted ? <Navigate to="/contacts" /> : <Component />}</>
  )
}
