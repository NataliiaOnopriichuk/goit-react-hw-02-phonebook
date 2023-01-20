export const ContactList = ({ contacts }) => {
  console.log('contacts :>> ', contacts);
  return (
    <ul className="cony">
      {contacts.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};
