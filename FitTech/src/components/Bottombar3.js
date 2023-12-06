import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HomeItemSelected3 from "./HomeItemSelected3";
import WorkoutItemSelected3 from "./WorkoutItemSelected3";
import styled, { css } from "styled-components";

const HomeIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  ${props => props.selected && css`
    background-color: black; // Change this to the desired background color for selected state
  `}
`;

const ProgressIcon = styled.img`
  position: relative;
  width: 35px; // Increased width
  height: 35px; // Increased height
  cursor: pointer;
  padding: 5px; // Optional padding to make the clickable area larger
  box-sizing: border-box; // Ensure the padding doesn't affect the overall dimensions

  ${props => props.selected && css`
    background-color: black; // Black background for selected state
    border-width: 20px; // Optional, to make the background rounded
  `}
`;

const VectorIcon = styled.img`
  position: relative;
  width: 28.9px;
  height: 30px;
  cursor: pointer;
`;
const VectorIcon1 = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const VectorIcon2 = styled.img`
  position: relative;
  width: 31.3px;
  height: 32.7px;
  cursor: pointer;
`;
const BottombarRoot = styled.div`
  position: absolute;
  top: 783px;
  left: 0px;
  background-color: var(--white);
  box-shadow: var(--shadow);
  width: 393px;
  height: 69px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-3xs) var(--padding-base);
  box-sizing: border-box;
`;

const Bottombar2 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onHomeIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/progress-screen-main");
  }, [navigate]);

  const onVectorIcon2Click = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  const onVectorIcon3Click = useCallback(() => {
    navigate("/settings-screen-main");
  }, [navigate]);

  const isHomeSelected = location.pathname === "/"; // Check if the home route is selected
  const isProgressSelected = location.pathname === "/progress-screen-main"; // Check if the progress route is selected


  return (
    <BottombarRoot>
      <HomeIcon
        src="/home-component.svg"
        alt="Home"
        onClick={onHomeIconClick}
        selected={isHomeSelected}
      />
      <WorkoutItemSelected3 />
      <ProgressIcon
        src={isProgressSelected ? "/progress-component-selected.svg" : "/progress-component.svg"}
        alt="Progress"
        onClick={onVectorIcon1Click}
        selected={isProgressSelected}
      />
      <VectorIcon1 alt="" src="/vector11.svg" onClick={onVectorIcon2Click} />
      <VectorIcon2 alt="" src="/vector6.svg" onClick={onVectorIcon3Click} />
    </BottombarRoot>
  );
};

export default Bottombar2;
