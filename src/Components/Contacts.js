import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'karen@gamil.com',
        phone: '232 -323-232'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '111-111-111'
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => {
          return <Contact key={contact.id} contact={contact} />;
        })}
      </div>
    );
  }
}

export default Contacts;
