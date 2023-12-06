import { useState, useCallback } from "react";
import PopupChangesSaved from "./PopupChangesSaved";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WorkoutItemNo from "./WorkoutItemNo";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import InputTextActive from "./InputTextActive";
import InputDropdownActive from "./InputDropdownActive";
import HelpFormInput from "./HelpFormInput";
import PopUp from "./PopUp";

const Bxx = styled.div`
  position: absolute;
  top: 612px;
  left: 89px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px;
`;
const MaterialSymbolsuploadIcon = styled.img`
  position: absolute;
  top: 7px;
  left: 152px;
  border-radius: var(--br-xl);
  width: 32px;
  height: 32px;
  overflow: hidden;
`;
const Upload = styled.div`
  position: absolute;
  top: 490px;
  left: 44px;
  width: 184px;
  height: 46px;
  font-family: var(--input-field-label);
`;
const SaveChangesWrapper = styled.div`
  position: absolute;
  top: 690px;
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
  position: absolute;
  top: 554px;
  left: 43px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-3xs) var(--padding-3xs) 0px;
  gap: var(--gap-21xl);
  margin-top: 40px;
`;
const VectorIcon = styled.img`
  position: relative;
  width: 11.3px;
  height: 11.3px;
`;
const ChestTag = styled.div`
  position: absolute;
  top: 612px;
  left: 47px;
  border-radius: var(--br-xl);
  background-color: var(--color-slategray-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-8xs) var(--padding-6xs) var(--padding-8xs)
    var(--padding-8xs);
  gap: var(--gap-sm);
  font-size: var(--body-1-size);
  font-family: var(--input-field-label);
  margin-top: 40px;
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

const SaveChangesButton = styled.div`
  background-color: var(--color-dodgerblue);
  text-align: center;
  border-radius: var(--button-radius);
  width: 150px;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
`;

const Exercises4 = ({ exerciseEdited }) => {
  const [isPopupChangesSavedOpen, setPopupChangesSavedOpen] = useState(false);

  const [isDiscardChanges, setIsDiscardChanges] = useState(false);
  const navigate = useNavigate();

  const onWorkoutItemNoContainerClick = useCallback(() => {
    navigate("/workoutexercises-screen");
  }, [navigate]);

  const onWorkoutexercisesComponentIconClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onProgressNavClick = useCallback(() => {
    // Please sync "Progresss screen" to the project
  }, []);

  const onBackClick = useCallback(() => {
    setIsDiscardChanges(true);
  }, []);

  const openPopupChangesSaved = useCallback(() => {
    setPopupChangesSavedOpen(true);
  }, []);

  const closePopupChangesSaved = useCallback(() => {
    setPopupChangesSavedOpen(false);
    setIsDiscardChanges(false);
    navigate(-1);
  }, [navigate]);

  const saveChangesClick = useCallback(() => {
    setPopupChangesSavedOpen(true);
  })

  const checkMarkClick = useCallback(() => {
    setIsDiscardChanges(false);
  })


  return (
    <>
      <ExercisesRoot>
        <BackCom2Icon
          alt=""
          src="/back-com2.svg"
          onClick={onBackClick}
        />
        <IosstatusBarblack>
          <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
          <IOSStatusBarBlackIcon />
        </IosstatusBarblack>
        <CreateExerciseTitle>Editing {exerciseEdited}</CreateExerciseTitle>
        <HelpWrapper>
          <HelpFormInput titleText="Exercise Name" placeholder="Ex: exercise1" inputWidth="300px" />
          <HelpFormInput titleText="Description" placeholder="Ex: This is a description" inputHeight="100px" inputWidth="300px" />
          <UploadMediaWrapper>
            <UploadMediaWrapper2>
              <UploadMediaText>Upload Cover Image</UploadMediaText>
              <UploadMediaImage src="uploadImage.svg" onClick={() => { }} />
            </UploadMediaWrapper2>
          </UploadMediaWrapper>
          <SaveChangesButton onClick={saveChangesClick}>Save Changes</SaveChangesButton>
        </HelpWrapper>
        <Tags>
          <Home>Category Tags</Home>
          <InputDropdownActive
            exercises="Tags"
            showPleaseSelectExercise={false}
            inputDropdownActiveWidth="105px"
          />
        </Tags>
        <ChestTag>
          <Home>#chest</Home>
          <VectorIcon alt="" src="/vector10.svg" />
        </ChestTag>
      </ExercisesRoot>
      {isPopupChangesSavedOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupChangesSaved}
        >
          <PopUp onClose={closePopupChangesSaved} text="Changes Saved" top="86px" left="523px" checkMarkClick={closePopupChangesSaved} />
        </PortalPopup>
      )}
      {isDiscardChanges && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupChangesSaved}
        >
          <PopUp onClose={closePopupChangesSaved} text="Discard Changes?" top="86px" left="523px" checkMarkClick={closePopupChangesSaved} onXMarkCloseClick={checkMarkClick} deleteImage={"deleteImage.svg"}/>
        </PortalPopup>
      )}
    </>
  );
};

export default Exercises4;
