import { useState, useCallback, useRef, useEffect} from "react";
import PopupExerciseCreated from "./PopupExerciseCreated";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WorkoutItemNo from "./WorkoutItemNo";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import InputTextActive from "./InputTextActive";
import InputDropdownActive from "./InputDropdownActive";
import HelpFormInput from "./HelpFormInput";
import PopUp from "./PopUp";

const HomeComponentIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Home = styled.div`
  position: relative;
`;
const HomeItem = styled.div`
  flex: 1;
  background-color: var(--white);
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Progress = styled.div`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 18px;
  flex-shrink: 0;
`;
const ProgressItem = styled.div`
  flex: 1;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const CommunityItem = styled.div`
  flex: 1;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SettingsComponentIcon = styled.img`
  position: relative;
  width: 35.7px;
  height: 37.3px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Settings = styled.div`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 15px;
  flex-shrink: 0;
`;
const NavigationBar = styled.div`
  position: absolute;
  top: 776px;
  left: 0px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 393px;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  font-size: var(--body-1-size);
  color: var(--black);
`;
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
const ExercisesChild = styled.div`
  position: absolute;
  top: calc(50% - 0px);
  left: 0px;
`;
const BackCom2Icon = styled.img`
  position: absolute;
  top: 47px;
  left: 15px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
`;
const ExerciseNameWrapper = styled.div`
  position: absolute;
  top: 147px;
  left: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) 0px;
`;
const DescriptionWrapper = styled.div`
  position: absolute;
  top: 238px;
  left: 43px;
  width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px;
  box-sizing: border-box;
  font-family: var(--input-field-label);
`;
const UploadMediaWrapper = styled.div`
  position: absolute;
  top: 490px;
  left: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) 0px;
  font-family: var(--input-field-label);
`;
const MaterialSymbolsuploadIcon = styled.img`
  position: absolute;
  top: 497px;
  left: 196px;
  border-radius: var(--br-xl);
  width: 32px;
  height: 32px;
  overflow: hidden;
`;
const CreateWrapper = styled.div`
  position: absolute;
  top: 682px;
  left: 43px;
  border-radius: var(--br-xl);
  background-color: var(--color-dodgerblue);
  width: 172px;
  height: 66px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-3xs) var(--padding-3xs) 0px;
  box-sizing: border-box;
  cursor: pointer;
`;
const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  gap: var(--gap-21xl);
`;
const ExercisesRoot = styled.div`
  position: absolute;
  top: 86px;
  left: 523px;
  background-color: var(--color-darkslategray);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 393px;
  height: 852px;
  overflow: hidden;
  mix-blend-mode: normal;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--white);
  font-family: var(--community);
`;

const HelpWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;
  flex-direction: column;
  top: 160px;
  left: 46px;
  margin-top: 25px;
`;


const UploadMediaText = styled.div`
`;

const UploadMediaImage = styled.img`
`;

const UploadMediaWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const CreateExerciseTitle = styled.div`
  text-align: center;
  margin-top: 60px;
  font-size: var(--title);
  text-decoration: underline;
  font-family: var(--community);
  font-weight: 600;
`;

const CreateButton = styled.div`
  background-color: var(--color-dodgerblue);
  text-align: center;
  border-radius: var(--button-radius);
  margin-top: 20px;
  width: 150px;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
`;

const Exercises5 = () => {
  const [isUploadMediaPopup, setIsUploadMediaPopup] = useState(false);

  const navigate = useNavigate();

  const onWorkoutItemNoContainerClick = useCallback(() => {
    navigate("/workoutexercises-screen");
  }, [navigate]);

  const onWorkoutexercisesComponentIconClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onProgressItemContainerClick = useCallback(() => {
    // Please sync "Progresss screen" to the project
  }, []);

  const onBackClick = useCallback(() => {
    navigate("/exercise-screen-list");
  }, [navigate]);

  const openPopupExerciseCreated = useCallback(() => {
    setPopupExerciseCreatedOpen(true);
  }, []);

  const closePopupExerciseCreated = useCallback(() => {
    setPopupExerciseCreatedOpen(false);
  }, []);

  // const handleCreateButtonClick = useCallback(() => {
    
  //   navigate(-1);
  // }, []);

  const closePopupUploadMedia = useCallback(() => {
    setIsUploadMediaPopup(false);
  }, []);

  const openPopupUploadMedia = useCallback(() => {
    setIsUploadMediaPopup(true);
  }, []);

  const uploadMediaButtonClick = () => {
    openPopupUploadMedia();
  }

  const onCloseHandler = useCallback(() => {
    closePopupUploadMedia();

    navigate(0);
  }, [navigate])

  const [nameInput, setNameInput] = useState('');

  const [isCreatePopup, setIsCreatePopup] = useState(false);

  const closeCreatePopup = useCallback(() => {
    setIsCreatePopup(false);
  }, []);


  const onCreatePopupCloseHandler = () => {
    console.log(nameInput);
    const output = nameInput;
    setNameInput("");
    setIsCreatePopup(false);
    navigate("/exercise-screen-list", {state: {data: output}});
  }

  const openCreatePopup = useCallback(() => {
    setIsCreatePopup(true);
  }, []);

  const handleNameInput = (name) => {
    setNameInput(name);
    console.log(`name input ${nameInput}`);
  }

  return (
    <>
      <ExercisesRoot>
        <IosstatusBarblack>
          <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
          <IOSStatusBarBlackIcon />
        </IosstatusBarblack>
        <BackCom2Icon
          alt=""
          src="/back-com2.svg"
          onClick={onBackClick}
        />
        <CreateExerciseTitle>Create Exercise</CreateExerciseTitle>
        <HelpWrapper>
          <HelpFormInput titleText="Exercise Name" placeholder="Ex: exercise1" inputWidth="300px" onChange={handleNameInput}/>
          <HelpFormInput titleText="Description" placeholder="Ex: This is a description" inputHeight="100px" inputWidth="300px" />
          <UploadMediaWrapper>
            <UploadMediaWrapper2>
              <UploadMediaText>Upload Cover Image</UploadMediaText>
              <UploadMediaImage src="uploadImage.svg" onClick={uploadMediaButtonClick} />
            </UploadMediaWrapper2>
          </UploadMediaWrapper>
          <Tags>
            <Home>Category Tags</Home>
            <InputDropdownActive
              exercises="Tags"
              showPleaseSelectExercise={false}
              inputDropdownActiveWidth="105px"
            />
          </Tags>
          <CreateButton onClick={openCreatePopup}>Create!</CreateButton>
        </HelpWrapper>
      </ExercisesRoot>
      {isUploadMediaPopup && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={onCloseHandler}
        >
          <PopUp onClose={onCloseHandler} text="Feature Currently Underdevelopment" top="86px" left="523px" checkMarkClick={onCloseHandler} />
        </PortalPopup>
      )}
      {isCreatePopup && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={onCreatePopupCloseHandler}
        >
          <PopUp onClose={onCreatePopupCloseHandler} text="Exercise Created Successfully" top="86px" left="523px" checkMarkClick={onCreatePopupCloseHandler} />
        </PortalPopup>
      )}
    </>
  );
};

export default Exercises5;
