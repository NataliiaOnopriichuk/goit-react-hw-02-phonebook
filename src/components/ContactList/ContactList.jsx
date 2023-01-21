import { ContactItem } from '../ContactItem/ContactItem';
import s from './ContactList.module.css';

export const ContactList = ({ contacts, findUser, removeContact }) => {
  return (
    <ul className={s.list}>
      <ContactItem
        contacts={contacts}
        findUser={findUser}
        removeContact={removeContact}
      ></ContactItem>
    </ul>
  );
};
