import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
      name: '',
      number: '',
  };

  handleInputChange = (e) => {
      const { value, name } = e.target;
      this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state);
      this.setState({ name: '', number: '' });
  };

  render() {
      const { name, number } = this.state;
      return (
          <form onSubmit={this.handleFormSubmit}>
              <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={this.handleInputChange}
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
                    value={number}
                    onChange={this.handleInputChange}
                  />
              </label>
              <button type="submit">Add Contact</button>
          </form>
      );
  }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
