import React, { Component } from 'react';
import { v4 as uid } from 'uuid';
import Container from './Container';
import Header from './Header';
import Section from './Section';
import Contacts from './Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  handelInputChange = e => {
    const { value } = e.target;
    this.setState({ name: value });
  }

  handelFormSubmit = e => {
    e.preventDefault();
    const { contacts, name } = this.state;
    this.setState({ contacts: [{ name, id: uid() }, ...contacts], name: '' });
  }

  render() {
    const { name, contacts } = this.state;
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
            <button type="submit">
              Add Contact
            </button>
          </form>
        </Section>
        {contacts.length > 0 && <Section title="Contacts">
          <Contacts contacts={ contacts }/>
        </Section>}

      </Container>
    );
  }
}

export default App;
