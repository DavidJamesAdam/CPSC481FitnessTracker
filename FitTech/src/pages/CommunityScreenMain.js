import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Testworkout from "../components/Testworkout";
import styled from "styled-components";

const CommunityScreenMainRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1024px;
  overflow: hidden;
`;

const CommunityScreenMain = () => {
  const navigate = useNavigate();

  const onHomeCom2IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWorkoutexercisesComponentContainerClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onWorkoutCom2IconClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onProgressCom2IconClick = useCallback(() => {
    // Please sync "Progress screen - Main" to the project
    navigate("/progress-screen-main");
  }, [navigate]);

  const onCommunityItemContainerClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onSettingsCom2IconClick = useCallback(() => {
    navigate("/settings-screen-main");
  }, [navigate]);

  return (
    <CommunityScreenMainRoot>
      <Testworkout />
    </CommunityScreenMainRoot>
  );
};

export default CommunityScreenMain;
