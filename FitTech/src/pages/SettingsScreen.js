import SettingsScreen2 from "../components/SettingsScreen2";
import SettingsScreen1 from "../components/SettingsScreen1";
import styles from "./SettingsScreen.module.css";

const SettingsScreen = () => {
  return (
    <div className={styles.settingsScreen}>
      <SettingsScreen2 />
      <SettingsScreen1 />
    </div>
  );
};

export default SettingsScreen;
