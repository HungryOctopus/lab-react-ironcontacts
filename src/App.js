import './App.css';
import React from 'react';
import contacts from './contacts.json';

const producerContacts = contacts;

class DisplayContacts extends React.Component {
  constructor() {
    super();
    this.state = { contacts: producerContacts.slice(0, 5) };
  }

  render() {
    return (
      <ul>
        {this.state.contacts.map((contact) => {
          return <li key={contact.id}>{contact.name}</li>;
        })}
      </ul>
    );
  }
}

function App() {
  return (
    <div className="App">
      <DisplayContacts />
    </div>
  );
}

export default App;
