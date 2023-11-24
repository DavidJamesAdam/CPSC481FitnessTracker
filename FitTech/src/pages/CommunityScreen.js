import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Testworkout1 from "../components/Testworkout1";
import styles from "./CommunityScreen.module.css";

const CommunityScreen = () => {
  const navigate = useNavigate();

  const onHomeCom2IconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onWorkoutCom2IconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  const onProgressCom2IconClick = useCallback(() => {
    navigate("/progress");
  }, [navigate]);

  const onCommunityItemContainerClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onSettingsCom2IconClick = useCallback(() => {
    navigate("/settiings");
  }, [navigate]);

  return (
    <div className={styles.communityScreen}>
      <Testworkout1 />
    </div>
  );
};

export default CommunityScreen;
