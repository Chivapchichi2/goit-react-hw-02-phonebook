import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onFilter }) => (
    <fieldset>
        <legend>Quickly find the right contact</legend>
        <label>
            Find contacts by name
            <input type="text" name="filter" value={value} onChange={onFilter} />
        </label>
    </fieldset>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
};
export default Filter;
