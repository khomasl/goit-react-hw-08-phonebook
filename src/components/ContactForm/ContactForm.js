import { useState, useCallback } from 'react'
import {
  useGetContactsQuery,
  useAddNewContactMutation,
} from '../../redux/contacts/contactsSlice'
import { v4 as uuid } from 'uuid'
import { notifyAlert } from '../notify'
import s from './ContactForm.module.css'

export default function ContactForm() {
  let nameId = uuid()
  let numberId = uuid()
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const { data } = useGetContactsQuery()
  const [addNewContact] = useAddNewContactMutation()

  const findContact = (contacts, name) => {
    const normName = name.toLowerCase()
    return contacts
      ? contacts.find((contact) => contact.name.toLowerCase() === normName)
      : false
  }

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target
      name === 'name' ? setName(value) : setNumber(value)
    },
    [name, number],
  )

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      !findContact(data, name)
        ? addNewContact({ name, number })
        : notifyAlert(`${name} is already in contact`)
      setName('')
      setNumber('')
    },
    [name, number],
  )

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        type="text"
        name="name"
        id={nameId}
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />

      <label htmlFor={numberId}>Number</label>
      <input
        type="tel"
        name="number"
        id={numberId}
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />

      <button className={s.btnForm} type="submit">
        Add contact
      </button>
    </form>
  )
}
