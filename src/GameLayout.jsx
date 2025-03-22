import React from 'react';
import styles from './Game.module.css';
import PropTypes from 'prop-types';

export const GameLayout = ({ children, onClickAgain }) => {
  return (
    <div className={styles.container}>
      {children}

      <button className={styles.GameButton} onClick={onClickAgain}>
        Начать заново
      </button>
    </div>
  );
};

GameLayout.propTypes = {
  onClickAgain: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
