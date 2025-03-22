import { FieldLayout } from './FieldLayout';
import styles from './Field.module.css';
import { InformationLayout } from '../Information/InformationLayout';
import PropTypes from 'prop-types';

export const FieldContainer = ({
  field,
  onButtonClick,
  currentPlayer,
  setCurrentPlayer,
}) => {
  return (
    <div className={styles.fieldContainer}>
      <FieldLayout
        field={field}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        onButtonClick={onButtonClick}
      />
    </div>
  );
};

InformationLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonClick: PropTypes.func.isRequired,
  currentPlayer: PropTypes.bool.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
};
