import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
    <ul className={styles.ContactList}>
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
