import { useMemo } from "react";
import InputTextActive from "./InputTextActive";
import styles from "./FormContainer.module.css";

const FormContainer = ({ userInfo, userFullName, propTop }) => {
  const fullNameInputStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.fullNameInput} style={fullNameInputStyle}>
      <div className={styles.fullNameWrapper}>
        <div className={styles.fullName}>{userInfo}</div>
      </div>
      <InputTextActive
        enterWorkoutNameHere="Name"
        inputTextActiveWidth="200px"
        inputTextActivePosition="absolute"
        inputTextActiveTop="42px"
        inputTextActiveLeft="0px"
        inputTextActiveHeight="unset"
        textboxFlex="unset"
      />
    </div>
  );
};

export default FormContainer;
