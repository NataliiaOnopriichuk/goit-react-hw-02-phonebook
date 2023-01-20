import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
  };

  addUserName = e => {
    this.setState({ name: e.target.value });
  };

  addContact = e => {
    e.preventDefault();
    this.props.userContacts({ name: this.state.name, id: nanoid() });
  };

  render() {
    return (
      <form onSubmit={this.addContact}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.addUserName}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
