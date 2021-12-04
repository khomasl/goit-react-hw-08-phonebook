import Navigation from '../Navigation/Navigation'
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'
import s from './AppBar.module.css'
import { useSelector } from 'react-redux'
import { isLogin, isAuth } from '../../redux/users/usersSelectors'

export default function AppBar() {
  const isLoggedIn = useSelector(isLogin)
  const isAuth_ = useSelector(isAuth)

  return (
    <header className={s.App_header}>
      <Navigation />
      {isAuth_ ? <UserMenu /> : <AuthNav />}
      <hr />
    </header>
  )
}
