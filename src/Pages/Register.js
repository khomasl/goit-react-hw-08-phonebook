import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../redux/users/usersThunks'
// import { useRegisterUserMutation } from '../redux/users/usersSlice'

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

export default function Register() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [registerUser] = useRegisterUserMutation()

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value)
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
    // registerUser({ name, email, password })
    dispatch(registerThunk({ name, email, password }))
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      {/* <h1>Register Page</h1> */}

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

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
          Register
        </button>
      </form>
    </div>
  )
}
