import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Testworkout1 from "../components/Testworkout1";
import styled from "styled-components";

const CommunityScreenPostingRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1024px;
  overflow: hidden;
`;

const CommunityScreenPosting = () => {
  const navigate = useNavigate();

  const onHomeComIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWorkoutexercisesComponentContainerClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onWorkoutComIconClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onProgressIconClick = useCallback(() => {
    // Please sync "Progress screen - Main" to the project
  }, []);

  const onSettingsIconClick = useCallback(() => {
    navigate("/settings-screen-main");
  }, [navigate]);

  return (
    <CommunityScreenPostingRoot>
      <Testworkout1 />
    </CommunityScreenPostingRoot>
  );
};

export default CommunityScreenPosting;
