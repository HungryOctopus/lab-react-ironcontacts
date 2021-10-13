import './App.css';
import React from 'react';
import contacts from './contacts.json';

const producerContacts = contacts;

class App extends React.Component {
  constructor() {
    super();
    this.state = { contacts: producerContacts.slice(0, 5) };
  }

  addRandomContact = (event) => {
    event.preventDefault();
    const newContact =
      producerContacts[Math.floor(Math.random() * producerContacts.length)];
    console.log(newContact);
    this.setState((currentState) => {
      return {
        contacts: [...currentState.contacts, newContact]
      };
    });
  };

  render() {
    return (
      <main>
        <table>
          <thead>
            <tr>
              <th colSpan="3">Ironcontacts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>

            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <th>
                    <img
                      src={contact.pictureUrl}
                      alt={contact.name}
                      width="80"
                    />
                  </th>
                  <th>{contact.name}</th>
                  <th>{contact.popularity}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <form onSubmit={this.addRandomContact}>
          <button>Add random contact</button>
        </form>
      </main>
    );
  }
}

export default App;
