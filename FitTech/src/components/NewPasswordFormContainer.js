import { useMemo } from "react";
import InputTextActive from "./InputTextActive";
import styles from "./NewPasswordFormContainer.module.css";

const NewPasswordFormContainer = ({ passwordInputConfirmPassw, propTop }) => {
  const newPasswordStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.newPassword} style={newPasswordStyle}>
      <InputTextActive
        inputTextActiveWidth="200px"
        inputTextActivePosition="absolute"
        inputTextActiveTop="36px"
        inputTextActiveLeft="0px"
        inputTextActiveHeight="unset"
        textboxFlex="unset"
      />
      <div className={styles.newPasswordWrapper}>
        <b className={styles.newPassword1}>{passwordInputConfirmPassw}</b>
      </div>
    </div>
  );
};

export default NewPasswordFormContainer;
