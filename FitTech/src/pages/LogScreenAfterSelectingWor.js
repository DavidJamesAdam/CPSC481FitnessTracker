import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomeScreen3 from "../components/HomeScreen3";
import styles from "./LogScreenAfterSelectingWor.module.css";

const LogScreenAfterSelectingWor = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  return (
    <div className={styles.logScreenAfterSelectingWor}>
      <HomeScreen3 />
    </div>
  );
};

export default LogScreenAfterSelectingWor;
