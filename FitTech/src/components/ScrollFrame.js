import styled from "styled-components";

const LikeeIcon = styled.img`
  position: absolute;
  top: 544px;
  left: 173px;
  width: 20.7px;
  height: 20.2px;
`;
const JennaSwitzer = styled.div`
  position: absolute;
  top: 33px;
  left: 19px;
  letter-spacing: 0.5px;
  line-height: 16px;
  display: flex;
  align-items: center;
  width: 188px;
  height: 39px;
`;
const WorkoutName = styled.div`
  position: absolute;
  top: 102px;
  left: 19px;
  letter-spacing: 0.5px;
  line-height: 16px;
  display: flex;
  align-items: center;
  width: 171px;
  height: 50px;
`;
const WorkoutGoalAchieved = styled.div`
  position: absolute;
  top: 182px;
  left: 19px;
  letter-spacing: 0.5px;
  line-height: 16px;
  display: flex;
  align-items: center;
  width: 278px;
  height: 50px;
`;
const TimeTakenTo = styled.div`
  position: absolute;
  top: 259px;
  left: 19px;
  letter-spacing: 0.5px;
  line-height: 16px;
  display: flex;
  align-items: center;
  width: 328px;
  height: 50px;
`;
const Div = styled.div`
  position: absolute;
  top: 531px;
  left: 139px;
  letter-spacing: 0.5px;
  line-height: 16px;
  display: flex;
  align-items: center;
  width: 23px;
  height: 50px;
`;
const Icon = styled.img`
  position: absolute;
  top: 363px;
  left: 58px;
  width: 259px;
  height: 140px;
  object-fit: cover;
`;
const ScrollframeRoot = styled.div`
  position: absolute;
  top: 130px;
  left: 10px;
  width: 375px;
  height: 581px;
  overflow-y: auto;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--white);
  font-family: var(--community);
`;

const ScrollFrame = () => {
  return (
    <ScrollframeRoot>
      <LikeeIcon alt="" src="/likee.svg" />
      <JennaSwitzer>Jenna Switzer</JennaSwitzer>
      <WorkoutName>{`Workout Name `}</WorkoutName>
      <WorkoutGoalAchieved>Workout Goal achieved</WorkoutGoalAchieved>
      <TimeTakenTo>Time taken to achieve the target</TimeTakenTo>
      <Div>13</Div>
      <Icon alt="" src="/5-3@2x.png" />
    </ScrollframeRoot>
  );
};

export default ScrollFrame;
