import React, { Component } from 'react';
import { v4 as uid } from 'uuid';
import Contacts from './Contacts';
import Container from './Container';
import Header from './Header';
import Notification from './Notification';
import Section from './Section';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };

  handelInputChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handelFormSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    const id = uid();
    this.setState({ contacts: [{ name, number, id  }, ...contacts], name: '', number: ''});
  }

  render() {
    const { name, contacts, number } = this.state;
    return (
      <Container>
        <Header />
        <Section title="Phone book">
          <form onSubmit={this.handelFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={ name }
                onChange={this.handelInputChange}
              />
            </label>
            <label>
              Number:
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={ number }
                onChange={this.handelInputChange}
              />
            </label>
            <button type="submit">
              Add Contact
            </button>
          </form>
        </Section>
        <Section title="Contacts">
          {contacts[0] ? <Contacts
            contacts={contacts} /> : <Notification message="No contacts added"/>}
        </Section>
      </Container>
    );
  }
}

export default App;


// state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter: '',
//   name: '',
//   number: ''
// }