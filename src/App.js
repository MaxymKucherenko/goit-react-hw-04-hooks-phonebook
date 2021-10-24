import { useEffect, useState } from 'react';
import Form from './components/Form';
import ContactsList from './components/СontactList';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');
    const parsedStorageContacts = JSON.parse(storageContacts);
    if (parsedStorageContacts) {
      setContacts(parsedStorageContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = (data) => {
    const inputNameId = uuidv4();
    data.id = inputNameId;
    const isInContacts = contacts.find((contact) => contact.name === data.name);
    if (isInContacts) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    setContacts((state) => [data, ...state]);
  };

  const onFilterChange = (event) => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = (contactId) => {
    setContacts((state) => state.filter(({ id }) => id !== contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const resultedVisibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return resultedVisibleContacts;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Phonebook</h1>
      </header>
      <Form onAdd={createContact} />
      <div>
        <h2>CONTACTS</h2>
        <Filter handleChange={onFilterChange} filter={filter} />
        <ContactsList
          contacts={getVisibleContacts()}
          handleDelete={deleteContact}
        />
      </div>
    </div>
  );
}
