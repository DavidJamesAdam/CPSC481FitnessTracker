import styled from "styled-components";
import WorkoutItemNo1 from "./WorkoutItemNo1";
import SelectedYes from "./SelectedYes";

const HomeCom2Icon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  cursor: pointer;
`;
const Home = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ProgressCom2Icon = styled.img`
  position: relative;
  width: 28.9px;
  height: 30px;
  cursor: pointer;
`;
const SettingsCom2Icon = styled.img`
  position: relative;
  width: 31.3px;
  height: 32.7px;
  cursor: pointer;
`;
const BottombarRoot = styled.div`
  position: absolute;
  top: 783px;
  left: 1px;
  border-radius: var(--br-10xs);
  background-color: var(--white);
  box-shadow: var(--shadow);
  width: 392px;
  height: 69px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-3xs) var(--padding-base);
  box-sizing: border-box;
`;

const FormContainer = ({
  propCursor,
  onHomeCom2IconClick,
  onWorkoutexercisesComponentContainerClick,
  onWorkoutCom2IconClick,
  onProgressCom2IconClick,
  onCommunityItemContainerClick,
  onSettingsCom2IconClick,
}) => {
  return (
    <BottombarRoot>
      <Home>
        <HomeCom2Icon
          alt=""
          src="/home-com3.svg"
          onClick={onHomeCom2IconClick}
        />
      </Home>
      <WorkoutItemNo1
        onWorkoutexercisesComponentContainerClick={
          onWorkoutexercisesComponentContainerClick
        }
        onWorkoutCom2IconClick={onWorkoutCom2IconClick}
      />
      <ProgressCom2Icon
        alt=""
        src="/vector8.svg"
        onClick={onProgressCom2IconClick}
      />
      <SelectedYes
        communityComponent="/community-component2.svg"
        showCommunity={false}
        selectedYesWidth="51px"
        selectedYesHeight="43px"
        selectedYesCursor="pointer"
        onCommunityItemContainerClick={onCommunityItemContainerClick}
      />
      <SettingsCom2Icon
        alt=""
        src="/vector6.svg"
        onClick={onSettingsCom2IconClick}
      />
    </BottombarRoot>
  );
};

export default FormContainer;
