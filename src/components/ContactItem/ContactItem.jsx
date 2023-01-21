import s from './ContactItem.module.css';

export const ContactItem = ({ contacts, findUser }) => {
  return findUser().map(({ name, phoneNumber, id }) => (
    <li key={id} className={s.listItem}>
      <p>
        {name}: {phoneNumber}
      </p>
      <button type="button" className={s.btnDelete}>
        Delete
      </button>
    </li>
  ));
};
