import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ type, id, name, label, value, onChange }) => {
  return (
    <div className='form-outline mb-4'>
      <input
        type={type}
        name={name}
        id={id}
        className='form-control'
        value={value}
        onChange={onChange}
      />
      <label className='form-label' for={id}>
        {label}
      </label>
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.bool,
  label: PropTypes.bool
};

TextField.defaultProps = {
  type: 'text'
};

export default TextField;
