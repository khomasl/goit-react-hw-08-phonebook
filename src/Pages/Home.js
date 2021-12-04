import React from 'react'

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
}

const Home = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Welcome page of our service Phonebook{' '}
      {/* <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span> */}
    </h1>
  </div>
)

export default Home
