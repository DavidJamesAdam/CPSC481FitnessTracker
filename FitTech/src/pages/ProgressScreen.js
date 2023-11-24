import ProgresssScreen2 from "../components/ProgresssScreen2";
import ProgresssScreen1 from "../components/ProgresssScreen1";
import ProgresssScreen from "../components/ProgresssScreen";
import styles from "./ProgressScreen.module.css";

const ProgressScreen = () => {
  return (
    <div className={styles.progressScreen}>
      <ProgresssScreen2 />
      <ProgresssScreen1 />
      <ProgresssScreen />
      <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
    </div>
  );
};

export default ProgressScreen;
