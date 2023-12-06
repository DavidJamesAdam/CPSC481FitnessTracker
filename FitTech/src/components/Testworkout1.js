import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormContainer from "./FormContainer";

const IosstatusBarblackIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 392px;
  height: 43.3px;
  overflow: hidden;
`;
const WorkoutType = styled.div`
  position: relative;
  letter-spacing: 0.5px;
  line-height: 16px;
`;
const Input = styled.input`
  align-self: stretch;
  border-radius: var(--br-8xs);
  background-color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  height: 36px;
  padding: 0 10px; // Add some padding for better text visibility
`;

const TextFieldFill = styled.div`
  position: absolute;
  top: 38px;
  left: 17px;
  width: 320px;
  height: 59px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;
const TextFieldFill1 = styled.div`
  position: absolute;
  top: 124px;
  left: 17px;
  width: 320px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;
const TextFieldFill2 = styled.div`
  position: absolute;
  top: 296px;
  left: 17px;
  width: 320px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;
const TextFieldFill3 = styled.div`
  position: absolute;
  top: 210px;
  left: 17px;
  width: 320px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;

// Inside your Testworkout1 component's return statement


const TextFieldFill4 = styled.div`
  position: absolute;
  top: 382px;
  left: 17px;
  width: 320px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;
const TextFieldFill5 = styled.div`
  position: absolute;
  top: 468px;
  left: 17px;
  width: 320px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Div = styled.div`
  position: absolute;
  top: 503px;
  left: 19px;
  letter-spacing: 0.5px;
  line-height: 18px;
  display: flex;
  align-items: center;
  width: 318px;
  height: 30px;
`;
const TextFieldFillParent = styled.div`
  position: absolute;
  top: 135px;
  left: 18px;
  width: 355px;
  height: 542px;
  overflow: hidden;
`;
const BackCom2Icon = styled.img`
  position: absolute;
  top: 102px;
  left: 34px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;
const Community = styled.b`
  position: absolute;
  top: 63px;
  left: 18px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.5px;
  line-height: 16px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 138px;
  height: 16px;
`;
const TestworkoutChild = styled.div`
  position: absolute;
  top: 85px;
  left: 304px;
  border-radius: 50%;
  background-color: var(--white);
  width: 58px;
  height: 58px;
  cursor: pointer;
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;
const ShareIcon = styled.img`
  position: absolute;
  top: 100px;
  left: 314px;
  width: 35px;
  height: 35px;
  object-fit: cover;
  cursor: pointer;
  
`;
const TestworkoutRoot = styled.div`
  position: absolute;
  top: 85px;
  left: 523px;
  background-color: var(--color-darkslategray);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 394px;
  height: 854px;
  overflow: hidden;
  mix-blend-mode: normal;
  text-align: left;
  font-size: var(--body-1-size);
  color: var(--white);
  font-family: var(--community);
`;
const DoneButton = styled.button`
  margin-top: 30px;
  margin-left: 115px; // Adds some space above the button
  padding: 10px 20px; // Adjust padding as needed
  border-radius: 5px; // Rounded corners
  border: none; // No border
  background-color: #4CAF50; // Green background color
  color: white; // White text
  cursor: pointer; // Cursor changes to pointer on hover
  font-size: 16px; // Adjust font size as needed
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;


const Testworkout1 = () => {
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

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community-screen-main"); // Updated path
  }, [navigate]);  

  const onEllipseClick = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  const onShareIconClick = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  return (
    <TestworkoutRoot>
      <IosstatusBarblackIcon1 alt="" src="/iosstatus-barblack1.svg" />
      <FormContainer
        propCursor="unset"
        onHomeCom2IconClick={onHomeComIconClick}
        onWorkoutexercisesComponentContainerClick={
          onWorkoutexercisesComponentContainerClick
        }
        onWorkoutCom2IconClick={onWorkoutComIconClick}
        onProgressCom2IconClick={onProgressIconClick}
        onSettingsCom2IconClick={onSettingsIconClick}
      />
      <TextFieldFillParent>
        <TextFieldFill>
          <WorkoutType>Workout type:</WorkoutType>
          <Input />
        </TextFieldFill>
        <TextFieldFill1>
          <WorkoutType>Workout target achieved:</WorkoutType>
          <Input />
        </TextFieldFill1>
        <TextFieldFill3>
          <WorkoutType>Time in which workout target was achieved:</WorkoutType>
          <Input />
          {/* <DoneButton onClick={() => navigate("/community-screen-main")}>Done</DoneButton> */}
      </TextFieldFill3>
      </TextFieldFillParent>
      <BackCom2Icon alt="" src="/back-com2.svg" onClick={onBackCom2IconClick} />
      <Community>Community</Community>
      <TestworkoutChild onClick={onEllipseClick} />
      <ShareIcon alt="" src="/share@2x.png" onClick={onShareIconClick} />
    </TestworkoutRoot>
  );
};

export default Testworkout1;
