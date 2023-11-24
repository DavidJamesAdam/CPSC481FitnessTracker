import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomeScreen1 from "../components/HomeScreen1";
import styles from "./MainScreenForEnteringWeigh.module.css";

const MainScreenForEnteringWeigh = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  return (
    <div className={styles.mainScreenForEnteringWeigh}>
      <HomeScreen1 />
    </div>
  );
};

export default MainScreenForEnteringWeigh;
