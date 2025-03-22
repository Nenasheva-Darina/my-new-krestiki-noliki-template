import React from 'react';
import styles from './Information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ isDraw, isGameEnded, victory }) => {
  return (
    <div className={styles.Information}>
      {isGameEnded || isDraw ? (
        <div className={styles.winnerOverlay}>
          <div className={styles.winnerMessage}> {victory}</div>
        </div>
      ) : (
        <div className={styles.info}> {victory}</div>
      )}
    </div>
  );
};

InformationLayout.propTypes = {
  isDraw: PropTypes.bool.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  victory: PropTypes.string.isRequired,
};
