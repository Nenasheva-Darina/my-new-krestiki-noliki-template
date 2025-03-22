import React from 'react';
import styles from './Field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, onButtonClick }) => {
  return (
    <div className={styles.field}>
      {field.map((value, index) => (
        <button
          key={index}
          className={styles.cell}
          onClick={() => onButtonClick(index)}
          disabled={value !== ''}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
