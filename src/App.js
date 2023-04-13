import './App.css';
import { useState } from 'react';
import AddContact from './components/addContact';
import ContactList from './components/contactList';

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Lungelo",
      number: "0811244648"
    },
    {
      id: 2,
      name: "John",
      number: "076674557"
    },
    {
      id: 3,
      name: "Slade",
      number: "0711244640",
    }
  ])

  const addPerson = (contact) => {
    setContacts([...contacts, contact])
  }
  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id))
  }
  var listItem = []

  const list = ['list empty']

  if (contacts == null) {
    listItem = list
  } else {
    listItem = contacts
  }
  console.log(contacts)
  return (
    <div className='container'>
      <header className="header">
        <h1>Contact Manager</h1>
        <hr/>
      </header>
      <AddContact handleSubmit={addPerson} />
      <ContactList data={listItem} onDelete={deleteContact}/>
    </div>
  );
}

export default App;
