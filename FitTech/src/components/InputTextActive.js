import { useMemo } from "react";
import styles from "./InputTextActive.module.css";

const InputTextActive = ({
  enterWorkoutNameHere,
  inputTextActiveWidth,
  inputTextActivePosition,
  inputTextActiveTop,
  inputTextActiveLeft,
  inputTextActiveHeight,
  textboxFlex,
}) => {
  const inputTextActiveStyle = useMemo(() => {
    return {
      width: inputTextActiveWidth,
      position: inputTextActivePosition,
      top: inputTextActiveTop,
      left: inputTextActiveLeft,
      height: inputTextActiveHeight,
    };
  }, [
    inputTextActiveWidth,
    inputTextActivePosition,
    inputTextActiveTop,
    inputTextActiveLeft,
    inputTextActiveHeight,
  ]);

  const textboxStyle = useMemo(() => {
    return {
      flex: textboxFlex,
    };
  }, [textboxFlex]);

  return (
    <div className={styles.inputtextactive} style={inputTextActiveStyle}>
      <div className={styles.textbox} style={textboxStyle}>
        <div className={styles.enterWorkoutName}>{enterWorkoutNameHere}</div>
      </div>
    </div>
  );
};

export default InputTextActive;
