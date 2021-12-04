import { useSelector } from 'react-redux'
import ContactItem from '../ContactItem/ContactItem'
import { getFilter } from '../../redux/contacts/contacts-selectors'
import { useGetContactsQuery } from '../../redux/contacts/contactsSlice'
import LoaderSpinner from '../Loader/Loader'

export default function ContactsList() {
  const filter = useSelector(getFilter).toLowerCase()
  const { data, error, isFetching } = useGetContactsQuery()

  const getFilteredContacts = (contacts) =>
    contacts.filter((contact) => contact.name.toLowerCase().includes(filter))

  return (
    <>
      {error ? (
        <>Add your contacts</>
      ) : isFetching ? (
        <LoaderSpinner />
      ) : data ? (
        <ul>
          {getFilteredContacts(data).map((contact) => (
            <ContactItem contact={contact} />
          ))}
        </ul>
      ) : null}
    </>
  )
}
