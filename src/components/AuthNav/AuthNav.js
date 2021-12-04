import { NavLink } from 'react-router-dom'
import s from './AuthNav.module.css'

const setLink = ({ isActive }) => (isActive ? s.activeLink : s.link)

export default function AuthNav() {
  return (
    <ul className={s.list}>
      <li>
        <NavLink to="/register" className={setLink} >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={setLink} >
          Login
        </NavLink>
      </li>
    </ul>
  )
}
