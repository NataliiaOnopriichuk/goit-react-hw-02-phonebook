import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addListUser = newUser => {
    this.setState(prev => ({ contacts: [...prev.contacts, newUser] }));
  };

  handleUser = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  findUser = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase().trim())
    );
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm userContacts={this.addListUser} />

        <h2>Contacts</h2>
        <Filter nameFilter={this.state.filter} handleUser={this.handleUser} />
        <ContactList contacts={this.state.contacts} findUser={this.findUser} />
      </div>
    );
  }
}