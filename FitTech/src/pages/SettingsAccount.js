import UserSettingsForm from "../components/UserSettingsForm";
import styles from "./SettingsAccount.module.css";

const SettingsAccount = () => {
  return (
    <div className={styles.settingsAccount}>
      <UserSettingsForm />
    </div>
  );
};

export default SettingsAccount;
