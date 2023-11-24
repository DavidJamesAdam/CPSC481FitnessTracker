import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomeScreen5 from "../components/HomeScreen";
import styles from "./ScreenAfterLoggingBothWeig.module.css";

const ScreenAfterLoggingBothWeig = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  return (
    <div className={styles.screenAfterLoggingBothWeig}>
      <HomeScreen5 />
    </div>
  );
};

export default ScreenAfterLoggingBothWeig;
