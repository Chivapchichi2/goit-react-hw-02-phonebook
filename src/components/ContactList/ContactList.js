import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

const ContactList = ({ contacts, onDelete }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={onDelete}
            />
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
    onDelete: PropTypes.func.isRequired,
};
export default ContactList;
