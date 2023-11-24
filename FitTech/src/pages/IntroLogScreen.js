import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomeScreen4 from "../components/HomeScreen4";
import styles from "./IntroLogScreen.module.css";

const IntroLogScreen = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  return (
    <div className={styles.introLogScreen}>
      <div className={styles.homeScreen}>
        <HomeScreen4 />
      </div>
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2IconClick}
      />
    </div>
  );
};

export default IntroLogScreen;
