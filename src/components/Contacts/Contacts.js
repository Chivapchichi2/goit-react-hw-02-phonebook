import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (<li key={contact.id}>{contact.name}</li>))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape(
      PropTypes.oneOfType(
        [PropTypes.string, PropTypes.number]
      )
    )
  ).isRequired,
}
export default Contacts;