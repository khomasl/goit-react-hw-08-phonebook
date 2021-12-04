import { NavLink } from 'react-router-dom'
import { isLogin, isAuth } from '../../redux/users/usersSelectors'
import { useSelector } from 'react-redux'
import s from './Navigation.module.css'

const setLink = ({ isActive }) => (isActive ? s.activeLink : s.link)

export default function Navigation() {
  const isLoggedIn = useSelector(isLogin)
  const isAuth_ = useSelector(isAuth)
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <NavLink to="/" className={setLink}>
            Home
          </NavLink>
        </li>
        {isAuth_ && (
          <li>
            <NavLink to="/contacts" className={setLink}>
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}
