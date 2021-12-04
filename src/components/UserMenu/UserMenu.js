import { useDispatch, useSelector } from 'react-redux'
import { getUserName, getUserEmail } from '../../redux/users/usersSelectors'
import { logoutThunk } from '../../redux/users/usersThunks'
// import {
//   useGetUserQuery,
//   useLogoutUserMutation,
// } from '../../redux/users/usersSlice'
import { store } from '../../redux/store'
import defaultAvatar from './default-avatar.jpg'
import { useNavigate } from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    marginLeft: 'auto',
  },
  avatar: {
    marginRight: 4,
  },
  email: {
    fontWeight: 700,
    marginRight: 8,
  },
  btn: {
    padding: '3px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '700',
    backgroundColor: '#2196f3',
    borderRadius: '10px',
    cursor: 'pointer',
  },
}

export default function UserMenu() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const name = useSelector(getUserName)
  const email = useSelector(getUserEmail)
  const avatar = defaultAvatar
  const handleClick = () => {
    dispatch(logoutThunk())
    // navigate('/')
  }

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.email}>Welcome, {email}</span>
      <button style={styles.btn} type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  )
}
