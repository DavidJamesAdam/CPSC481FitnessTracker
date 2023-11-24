import FormContainer1 from "../components/FormContainer1";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <div className={styles.homeScreen1}>
        <FormContainer1 />
      </div>
    </div>
  );
};

export default HomeScreen;
