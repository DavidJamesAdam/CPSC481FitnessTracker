import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LineMdconfirmCircleTwotoneIcon from "./LineMdconfirmCircleTwotoneIcon";

const PopupWorkoutUpdatedChild = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-gainsboro);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 341px;
  height: 196px;
`;
const WorkoutUpdated = styled.div`
  position: relative;
  left: 25%;
  top: 40%;
`;
const PopupWorkoutUpdatedRoot = styled.div`
  position: fixed;
  left: 36%;
  top: 20%;
  width: 341px;
  height: 196px;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--black);
  font-family: var(--community);
`;

const PopupWorkoutUpdated = () => {
  const navigate = useNavigate();

  const onLineMdconfirmCircleTwotoneClick = useCallback(() => {
    navigate("/workout-screen-workout-created");
  }, [navigate]);

  return (
    <PopupWorkoutUpdatedRoot>
      <WorkoutUpdated>Workout updated!</WorkoutUpdated>
      <LineMdconfirmCircleTwotoneIcon
        propTop="65%"
        propLeft="43%"
        propCursor="pointer"
        onLineMdconfirmCircleTwotoneClick={onLineMdconfirmCircleTwotoneClick}
      />
      <PopupWorkoutUpdatedChild />
    </PopupWorkoutUpdatedRoot>
  );
};

export default PopupWorkoutUpdated;
