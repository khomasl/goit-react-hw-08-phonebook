import ContactForm from '../components/ContactForm/ContactForm'
import ContactsList from '../components/ContactsList/ContactsList'
import Filter from '../components/Filter/Filter'

export default function Contacts() {
  return (
    <>
      <h1 className="App__title">Phonebook</h1>
      <ContactForm />
      <div className="App-Contacts">
        <h2 className="App__title">Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </>
  )
}
