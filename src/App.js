import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Section from './components/Section';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };

    const contactNames = this.state.contacts.map(elem =>
      elem.name.toLowerCase(),
    );

    contactNames.includes(contact.name.toLowerCase())
      ? alert(`${contact.name} is already is contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };

  deleteContant = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const visibleName = this.getVisibleContact();

    return (
      <Section>
        <h1 className="App">Phonebook</h1>

        <Form onSubmit={this.formSubmitHandler} />

        <h2 className="App">Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList value={visibleName} onDeleteContant={this.deleteContant} />
      </Section>
    );
  }
}

export default App;
