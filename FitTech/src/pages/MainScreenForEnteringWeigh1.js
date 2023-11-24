import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomeScreen2 from "../components/HomeScreen2";
import styles from "./MainScreenForEnteringWeigh1.module.css";

const MainScreenForEnteringWeigh1 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  return (
    <div className={styles.mainScreenForEnteringWeigh}>
      <HomeScreen2 />
    </div>
  );
};

export default MainScreenForEnteringWeigh1;
