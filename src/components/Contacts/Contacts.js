import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (<li key={contact.id}>{contact.name}:{contact.number}</li>))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)).isRequired,
}
export default Contacts;