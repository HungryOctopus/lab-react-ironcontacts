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
    this.setState((currentState) => {
      return {
        contacts: [...currentState.contacts, newContact]
      };
    });
  };

  sortByName = (event) => {
    event.preventDefault();
    function compare(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }
    const sortedByName = this.state.contacts.sort(compare);

    console.log(sortedByName);
    this.setState((currentState) => {
      return {
        contacts: sortedByName
      };
    });
  };

  sortByPopularity = (event) => {
    event.preventDefault();
    function compare(a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    }
    const sortedByPopularity = this.state.contacts.sort(compare);

    console.log(sortedByPopularity);
    this.setState((currentState) => {
      return {
        contacts: sortedByPopularity
      };
    });
  };

  render() {
    return (
      <main>
        <h1> Ironcontacts </h1>
        <form onSubmit={this.addRandomContact}>
          <button>Add random contact</button>
        </form>

        <form onSubmit={this.sortByName}>
          <button>Sort by name</button>
        </form>

        <form onSubmit={this.sortByPopularity}>
          <button>Sort by popularity</button>
        </form>

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
      </main>
    );
  }
}

export default App;
