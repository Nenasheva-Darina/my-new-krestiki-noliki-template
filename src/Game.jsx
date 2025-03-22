import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FieldContainer } from './Field/FieldContainer';
import { InformationContainer } from './Information/InformationContainer';
import { GameLayout } from './GameLayout';

export const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

  const onClickAgain = () => {
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
    setField(['', '', '', '', '', '', '', '', '']);
  };

  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Состояние игры
  const checkGameState = (lastPlayer, currentField) => {
    const winner = WIN_PATTERNS.some((element) => {
      return element.every((elem) => currentField[elem] === lastPlayer);
    });

    return winner;
  };

  const ClickInPlayingFieldButton = (index) => {
    const copy = [...field];
    copy[index] = currentPlayer;
    setField(copy); //Обновили поле

    const draw = !copy.includes(''); //Проверяем есть ли нечья
    const lastPlayer = currentPlayer;
    const checkWinner = checkGameState(lastPlayer, copy);

    if (checkWinner) {
      setIsGameEnded(true);
    } else if (draw) {
      setIsDraw(true);
    } else {
      setIsGameEnded(false);
      setIsDraw(false);
      const NextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(NextPlayer);
    }
  };

  return (
    <GameLayout onClickAgain={onClickAgain}>
      <InformationContainer
        isDraw={isDraw}
        setIsDraw={setIsDraw}
        field={field}
        setField={setField}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
      <FieldContainer
        field={field}
        setField={setField}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        onButtonClick={ClickInPlayingFieldButton}
      />
    </GameLayout>
  );
};
