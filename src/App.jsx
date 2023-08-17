import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Input } from './components/Input';
import { Title } from './Title';
import { Contacts } from './components/Contacts';
import { Filter } from './components/FIlter';
import { ContactElement } from 'components/ContactElement/ContactElement';

import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const nameRepeated = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (nameRepeated) {
      return alert(`${nameRepeated.name} is already in your contacts`);
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };
    setContacts(prevState => [newContact, ...prevState]);
  };

  const handleChange = ({ target }) => {
    setFilter(target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className={css.container}>
      <Title>Phonebook</Title>
      <Input addContact={addContact} />
      <Title>Contacts</Title>
      <Filter handleChange={handleChange} filter={filter} />
      <Contacts>
        <ContactElement
          contacts={getFilteredContacts()}
          deleteContact={deleteContact}
        />
      </Contacts>
    </div>
  );
};
