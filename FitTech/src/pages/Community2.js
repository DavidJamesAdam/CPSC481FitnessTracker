import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CommunityContainer from "../components/CommunityContainer";
import styles from "./Community2.module.css";

const Community2 = () => {
  const navigate = useNavigate();

  const onHomeComIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onWorkoutComIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  const onProgressIconClick = useCallback(() => {
    navigate("/progress");
  }, [navigate]);

  const onSettingsIconClick = useCallback(() => {
    navigate("/settiings");
  }, [navigate]);

  return (
    <div className={styles.community2}>
      <CommunityContainer />
    </div>
  );
};

export default Community2;
