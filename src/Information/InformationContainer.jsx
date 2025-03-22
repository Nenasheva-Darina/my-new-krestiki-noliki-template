import React from 'react';
import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';

export const InformationContainer = ({
  isDraw,
  setIsDraw,
  isGameEnded,
  setIsGameEnded,
  currentPlayer,
  setCurrentPlayer,
}) => {
  let victory;

  if (isDraw) {
    victory = 'Ничья';
  } else if (isGameEnded === true && isDraw === false) {
    victory = `Победа: ${currentPlayer}`;
  } else {
    victory = `Ходит: ${currentPlayer}`;
  }
  return (
    <InformationLayout
      victory={victory}
      isDraw={isDraw}
      setIsDraw={setIsDraw}
      isGameEnded={isGameEnded}
      setIsGameEnded={setIsGameEnded}
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
    />
  );
};

InformationContainer.propTypes = {
  isDraw: PropTypes.bool.isRequired,
  setIsDraw: PropTypes.func.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  setIsGameEnded: PropTypes.func.isRequired,
  currentPlayer: PropTypes.bool.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
  victory: PropTypes.string.isRequired,
};
