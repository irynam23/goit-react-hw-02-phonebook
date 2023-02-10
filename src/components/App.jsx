import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleAddContact = contact => {
    if (
      this.state.contacts.some(({ name }) => {
        return name.toLowerCase() === contact.name.toLowerCase();
      })
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    const newContact = { ...contact, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value.trim().toLowerCase() });
  };

  render() {
    const { filter, contacts } = this.state;

    const filteredContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter);
    });
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />

        {contacts.length ? (
          <>
            <h2>Contacts</h2>
            <Filter handleFilter={this.handleFilter} />
            <ContactList
              contacts={filteredContacts || contacts}
              handleDelete={this.handleDelete}
            />
          </>
        ) : (
          <p>No contacts added</p>
        )}
      </div>
    );
  }
}
