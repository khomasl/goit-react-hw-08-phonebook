import s from './ContactItem.module.css'
import { useDeleteContactMutation } from '../../redux/contacts/contactsSlice'

export default function ContactItem({ contact }) {
  const { id, name, number } = contact
  const [deleteContact] = useDeleteContactMutation()
  const handleClick = (e) => deleteContact(e.target.id)

  return (
    <>
      <li key={id} className={s.item}>
        <p className={s.itemName}>{name}</p>
        <p className={s.itemNumber}>{number}</p>
        <button
          className={s.btnDel}
          type="button"
          name={name}
          id={id}
          onClick={handleClick}
        >
          X
        </button>
      </li>
      <hr className={s.hr} />
    </>
  )
}
