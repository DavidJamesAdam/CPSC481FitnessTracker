import { useMemo } from "react";
import styles from "./InputDropdownActive.module.css";

const InputDropdownActive = ({
  pleaseSelectExercise,
  exercises,
  showPleaseSelectExercise,
  inputDropdownActiveWidth,
  inputDropdownActiveHeight,
  inputDropdownActivePosition,
  inputDropdownActiveTop,
  inputDropdownActiveLeft,
}) => {
  const inputDropdownActiveStyle = useMemo(() => {
    return {
      width: inputDropdownActiveWidth,
      height: inputDropdownActiveHeight,
      position: inputDropdownActivePosition,
      top: inputDropdownActiveTop,
      left: inputDropdownActiveLeft,
    };
  }, [
    inputDropdownActiveWidth,
    inputDropdownActiveHeight,
    inputDropdownActivePosition,
    inputDropdownActiveTop,
    inputDropdownActiveLeft,
  ]);

  return (
    <div
      className={styles.inputdropdownactive}
      style={inputDropdownActiveStyle}
    >
      {showPleaseSelectExercise && (
        <div className={styles.pleaseSelectExercise}>
          {pleaseSelectExercise}
        </div>
      )}
      <div className={styles.dropdownBox}>
        <div className={styles.exercises}>{exercises}</div>
        <img className={styles.chevronIcon} alt="" src="/chevron.svg" />
      </div>
    </div>
  );
};

export default InputDropdownActive;
