import { useMemo } from "react";
import styles from "./TypeTextStateInactive.module.css";

const TypeTextStateInactive = ({
  label,
  textFieldData,
  typeTextStateInactivePosition,
  typeTextStateInactiveTop,
  typeTextStateInactiveLeft,
  typeTextStateInactiveHeight,
}) => {
  const typeTextStateInactiveStyle = useMemo(() => {
    return {
      position: typeTextStateInactivePosition,
      top: typeTextStateInactiveTop,
      left: typeTextStateInactiveLeft,
      height: typeTextStateInactiveHeight,
    };
  }, [
    typeTextStateInactivePosition,
    typeTextStateInactiveTop,
    typeTextStateInactiveLeft,
    typeTextStateInactiveHeight,
  ]);

  return (
    <div
      className={styles.typetextStateinactive}
      style={typeTextStateInactiveStyle}
    >
      <div className={styles.label}>{label}</div>
      <div className={styles.textbox}>
        <div className={styles.textFieldData}>{textFieldData}</div>
      </div>
    </div>
  );
};

export default TypeTextStateInactive;
