import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({id, name, number, onDelete}) => (
  <li>
    <span>{name}:</span>
    <span>{number}</span>
    <button type="button" onClick={()=>onDelete(id)}>
      Delete
    </button>
  </li>
)

Contact.propTypes = {
  id:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  number:PropTypes.string.isRequired,
  onDelete:PropTypes.func.isRequired,
}

export default Contact;
