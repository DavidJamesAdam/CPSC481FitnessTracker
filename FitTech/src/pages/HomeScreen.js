import { useCallback } from "react";
import styled from "styled-components";
import IOSStatusBarBlackIcon from "../components/IOSStatusBarBlackIcon";
import SocialArea from "../components/SocialArea";
import Bottombar2 from "../components/Bottombar2";
import { useNavigate } from "react-router-dom";
import LoggedExerciseView from "../components/LoggedExerciseView";

const IosstatusBarblack1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: flex-end;
  width: 123.7px;
  height: 15.9px;
`;
const IosstatusBarblack = styled.div`
  position: absolute;
  top: -24px;
  left: -1px;
  width: 393px;
  height: 71px;
  font-size: var(--body-1-size);
  color: var(--color-dimgray-100);
`;
const LogLastSet = styled.div`
  position: relative;
  font-weight: 900;
`;
const LogLastSetButton = styled.div`
  border-radius: 5px;
  background-color: var(--color-dodgerblue);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 160px;
  height: 114px;
  margin: 10px; 
  padding: var(--padding-3xs);
  cursor: pointer;
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;
const LogLastSetButton1 = styled.div`
  border-radius: var(--br-10xs);
  background-color: var(--color-dodgerblue);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 196px;
  height: 134px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  padding: var(--padding-3xs);
  cursor: pointer;
`;
const ProgressChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--color-darkslategray);
  width: 394px;
  height: 323px;
`;
const ProgressBoxChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-slategray-100);
  width: 360px;
  height: 261px;
`;
const ProgressBox = styled.div`
  position: absolute;
  top: 42px;
  left: 17px;
  width: 360px;
  height: 261px;
  cursor: pointer;
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;
const Progress1 = styled.div`
  position: absolute;
  top: 9px;
  left: 19px;
`;
const Image10Icon = styled.img`
  position: absolute;
  top: 80px;
  left: 44px;
  width: 307px;
  height: 185px;
  object-fit: cover;
`;
const Progress = styled.div`
  position: absolute;
  top: 467px;
  left: 0px;
  width: 394px;
  height: 321px;
`;
const HomeScreen2 = styled.div`
  position: absolute;
  top: 86px;
  left: 524px;
  background-color: var(--color-darkslategray);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 393px;
  height: 852px;
  overflow: hidden;
  mix-blend-mode: normal;
`;
const HomeScreen1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--white);
  width: 1440px;
  height: 1024px;
  overflow: hidden;
`;
const HomeScreenRoot = styled.div`
  position: relative;
  width: 100%;
  height: 1024px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--white);
  font-family: var(--community);
`;

const Title = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 0px;
`;

const RecentLogged = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-slategray-200);
  border-radius: var(--br-8xs);
  background-color: var(--color-slategray-100);
  width: 160px;
  height: 100px;
  margin: 15px;
  padding-top: 10px;
  cursor: pointer;
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;

const Text = styled.div `
  text-align: center;
  margin-top: 30px;
`;

const Date = styled.div`
  text-align: center;
  font-size: 14px;
`;

const RecentLoggedText = styled.div`
  margin-left: 15px;
`;

const RecentLoggedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

const ViewButton = styled.div`
  background-color: var(--color-dodgerblue);
  width: 100px;
  text-align: center;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: auto;
  margin-top: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Wrapper = styled.div `
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
/*
  const onFrameContainerClick = useCallback(() => {
    navigate("/workout-screen-my-workout-list");
  }, [navigate]);
*/

const HomeScreen = () => {

  const navigate = useNavigate();

  const onLogLastSetButton1Click = useCallback(() => {
    navigate("/logging-workout-list")
  }, [navigate]);

  const onProgressBoxContainerClick = useCallback(() => {
    console.log("Navigate to progress");
    navigate("/progress-screen-main");
  }, [navigate]);

  const onViewClick = useCallback(() => {
    navigate("/progress-view-workout");
  }, [navigate])

  const logButtonClick = useCallback(() => {
    navigate("/logging-workout-list");
  }, [navigate]);

  return (
    <HomeScreenRoot>
      <HomeScreen1>
        <HomeScreen2>
          <IosstatusBarblack>
            <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
            <IOSStatusBarBlackIcon />
          </IosstatusBarblack>
          <Wrapper>
            <RecentLoggedContainer>
              <RecentLoggedText>Recently Logged</RecentLoggedText>
              <RecentLogged onClick={onViewClick}>
                <Title>Chest Day</Title>
                <Date>November 25th 2023</Date>
                <ViewButton onClick={onViewClick}>View</ViewButton>
              </RecentLogged>
            </RecentLoggedContainer>
            <RecentLoggedContainer>
              <RecentLoggedText>Log New Workout</RecentLoggedText>
              <LogLastSetButton onClick={logButtonClick}><Text>Log</Text></LogLastSetButton>
            </RecentLoggedContainer>
          </Wrapper>
          {/* <LogLastSetButton>
            <LogLastSet>Log Last Set</LogLastSet>
          </LogLastSetButton>
          <LogLastSetButton1 onClick={onLogLastSetButton1Click}>
            <LogLastSet>Log</LogLastSet>
          </LogLastSetButton1> */}
          <Progress>
            <ProgressChild />
            <ProgressBox onClick={onProgressBoxContainerClick}>
              <ProgressBoxChild />
            </ProgressBox>
            <Progress1>Progress</Progress1>
            <Image10Icon alt="" src="/image-10@2x.png" />
          </Progress>
          <SocialArea />
          <Bottombar2 />
        </HomeScreen2>
      </HomeScreen1>
    </HomeScreenRoot>
  );
};

export default HomeScreen;
