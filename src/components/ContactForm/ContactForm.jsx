import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addUserName = e => {
    this.setState({ name: e.target.value });
  };

  addUserPhone = e => {
    this.setState({ number: e.target.value });
  };

  addContact = e => {
    e.preventDefault();
    this.props.userContacts({
      name: this.state.name,
      phoneNumber: this.state.number,
      id: nanoid(),
    });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.addContact}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.addUserName}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.addUserPhone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
