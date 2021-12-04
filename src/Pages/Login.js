import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../redux/users/usersThunks'
// import { useLoginUserMutation } from '../redux/users/usersSlice'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 320,
    margin: '15px auto 0',
    padding: 15,
    borderStyle: 'groove',
    borderRadius: 10,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  btn: {
    padding: '4px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '700',
    backgroundColor: '#2196f3',
    borderRadius: '10px',
    cursor: 'pointer',
  },
}

export default function Login() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [loginUser] = useLoginUserMutation()

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
      default:
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // loginUser({ email, password })
    dispatch(loginThunk({ email, password }))
    setEmail('')
    setPassword('')
  }

  return (
    <>
      {/* <h1>Login Page</h1> */}

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button style={styles.btn} type="submit">
          Login
        </button>
      </form>
    </>
  )
}
