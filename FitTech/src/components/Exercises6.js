import { useState, useCallback } from "react";
import PopupAreYouSureDeleteEx from "./PopupAreYouSureDeleteEx";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WorkoutItemNo from "./WorkoutItemNo";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";

const A = styled.b`
  position: relative;
  letter-spacing: 0.2em;
  display: inline-block;
  width: 57px;
  height: 50px;
  flex-shrink: 0;
`;
const B1 = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.2em;
  display: inline-block;
  width: 57px;
  height: 50px;
`;
const BarbellBenchChild = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
  border-radius: var(--br-10xs);
  background-color: var(--color-slategray-200);
  border: 5px solid var(--black);
  box-sizing: border-box;
  width: 382px;
  height: 141px;
`;
const Crunches = styled.b`
  position: absolute;
  top: 10px;
  left: 147px;
  display: inline-block;
  width: 149px;
  height: 30px;
`;
const BarbellBenchIcon = styled.img`
  position: absolute;
  top: 10px;
  left: 12px;
  border-radius: var(--br-xl);
  width: 123px;
  height: 110px;
  object-fit: cover;
`;
const Edit2 = styled.p`
  margin: 0;
`;
const Edit1 = styled.div`
  position: relative;
  font-weight: 300;
  display: inline-block;
  width: 43px;
  height: 31px;
  flex-shrink: 0;
`;
const Edit = styled.div`
  position: absolute;
  top: 77px;
  left: 147px;
  border-radius: var(--br-31xl);
  background-color: var(--color-dodgerblue);
  width: 100px;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  cursor: pointer;
`;
const View1 = styled.div`
  position: relative;
  font-weight: 300;
`;
const View2 = styled.div`
  position: absolute;
  top: 77px;
  left: 259px;
  border-radius: var(--br-31xl);
  background-color: var(--color-dodgerblue);
  width: 100px;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  cursor: pointer;
`;
const MdigarbageCanOutlineIcon = styled.img`
  position: absolute;
  top: 3px;
  left: 330px;
  border-radius: var(--br-xl);
  width: 29px;
  height: 29px;
  overflow: hidden;
  cursor: pointer;
`;
const BarbellBench = styled.div`
  position: absolute;
  top: 48px;
  left: -20px;
  width: 372px;
  height: 131px;
  font-size: var(--font-size-3xl);
`;
const Exercise = styled.div`
  position: absolute;
  top: 48px;
  left: -20px;
  width: 372px;
  height: 131px;
  font-size: var(--font-size-3xl);
`;
const B = styled.div`
  position: relative;
  width: 135px;
  height: 179px;
`;
const BarbellBench2 = styled.div`
  position: absolute;
  top: 46px;
  left: -21px;
  width: 372px;
  height: 131px;
  font-size: var(--font-size-3xl);
`;
const C = styled.div`
  position: relative;
  width: 57px;
  height: 223px;
`;
const Letters1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
`;
const Letters = styled.div`
  position: absolute;
  top: 96px;
  left: 32px;
  width: 57px;
  height: 1650px;
  font-size: var(--font-size-13xl);
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
  color: var(--color-dimgray-100);
`;
const ExercisesChild = styled.div`
  position: absolute;
  top: calc(50% - 0px);
  left: 0px;
`;
const ScrollBarChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  background-color: var(--color-gainsboro);
  width: 6px;
  height: 691px;
`;
const ScrollBarItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  background-color: var(--gray);
  width: 6px;
  height: 128px;
`;
const ScrollBar = styled.div`
  position: absolute;
  top: 55px;
  left: 377px;
  width: 6px;
  height: 691px;
`;
const AddItemComponent = styled.img`
  position: absolute;
  top: 680px;
  left: 139px;
  width: 113px;
  height: 105px;
  cursor: pointer;
`;
const MyExercises = styled.b`
  position: relative;
  text-decoration: underline;
`;
const MyExercisesWrapper = styled.div`
  position: absolute;
  top: 47px;
  left: calc(50% - 87.5px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  font-size: var(--font-size-5xl);
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
  font-size: var(--body-1-size);
  color: var(--white);
  font-family: var(--community);
`;

const Exercises6 = () => {
  const [isPopupAreYouSureDeleteExOpen, setPopupAreYouSureDeleteExOpen] =
    useState(false);
  const [isPopupAreYouSureDeleteEx1Open, setPopupAreYouSureDeleteEx1Open] =
    useState(false);
  const navigate = useNavigate();

  const onWorkoutItemNoContainerClick = useCallback(() => {
    navigate("/workoutexercises-screen");
  }, [navigate]);

  const onWorkoutexercisesComponentIconClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onEditContainerClick = useCallback(() => {
    navigate("/exercise-screen-edit");
  }, [navigate]);

  const onViewContainerClick = useCallback(() => {
    navigate("/exercise-screen-view");
  }, [navigate]);

  const openPopupAreYouSureDeleteEx = useCallback(() => {
    setPopupAreYouSureDeleteExOpen(true);
  }, []);

  const closePopupAreYouSureDeleteEx = useCallback(() => {
    setPopupAreYouSureDeleteExOpen(false);
  }, []);

  const onEditContainer1Click = useCallback(() => {
    navigate("/exercise-screen-edit");
  }, [navigate]);

  const onViewContainer1Click = useCallback(() => {
    navigate("/exercise-screen-view");
  }, [navigate]);

  const openPopupAreYouSureDeleteEx1 = useCallback(() => {
    setPopupAreYouSureDeleteEx1Open(true);
  }, []);

  const closePopupAreYouSureDeleteEx1 = useCallback(() => {
    setPopupAreYouSureDeleteEx1Open(false);
  }, []);

  const onProgressItemContainerClick = useCallback(() => {
    // Please sync "Progresss screen" to the project
  }, []);

  const onAddItemComponentClick = useCallback(() => {
    navigate("/exercise-screen-create");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const alphabetHashtable = {};

  // Create arrays for each letter
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    alphabetHashtable[letter] = [];
  }

  alphabetHashtable['B'].push('barbell bench');
  alphabetHashtable['C'].push('crunch');

  return (
    <>
      <ExercisesRoot>
        <Letters>
          <Letters1>
            <>
              {Object.from(alphabetHashtable.entries()).map(([letter, exercises]) => (
              <A key={letter}>
                <h2>{letter}</h2>
                {exercises.map((exercise) => (
                  <Exercise key={exercise.name}>
                    {exercise.name} - {exercise.category}
                  </Exercise>
                ))}
              </A>))}
            </>
            {/* <A>A</A>
            <B>
              <B1>B</B1>
              <BarbellBench>
                <BarbellBenchChild />
                <Crunches>Barbell Bench</Crunches>
                <BarbellBenchIcon alt="" src="/barbell-bench2@2x.png" />
                <Edit onClick={onEditContainerClick}>
                  <Edit1>
                    <Edit2>Edit</Edit2>
                  </Edit1>
                </Edit>
                <View2 onClick={onViewContainerClick}>
                  <View1>View</View1>
                </View2>
                <MdigarbageCanOutlineIcon
                  alt=""
                  src="/mdigarbagecanoutline1.svg"
                  onClick={openPopupAreYouSureDeleteEx}
                />
              </BarbellBench>
            </B>
            <C>
              <B1>C</B1>
              <BarbellBench2>
                <BarbellBenchChild />
                <Crunches>Crunches</Crunches>
                <Edit onClick={onEditContainer1Click}>
                  <Edit1>
                    <Edit2>Edit</Edit2>
                  </Edit1>
                </Edit>
                <View2 onClick={onViewContainer1Click}>
                  <View1>View</View1>
                </View2>
                <BarbellBenchIcon alt="" src="/crunchimage@2x.png" />
                <MdigarbageCanOutlineIcon
                  alt=""
                  src="/mdigarbagecanoutline1.svg"
                  onClick={openPopupAreYouSureDeleteEx1}
                />
              </BarbellBench2>
            </C>
            <A>D</A>
            <A>E</A>
            <A>F</A>
            <A>G</A>
            <A>H</A>
            <A>I</A>
            <A>J</A>
            <A>K</A>
            <A>L</A>
            <A>M</A>
            <A>N</A>
            <A>O</A>
            <A>P</A>
            <A>Q</A>
            <A>R</A>
            <A>S</A>
            <A>T</A>
            <A>U</A>
            <A>V</A>
            <A>W</A>
            <A>X</A>
            <A>Y</A>
            <A>Z</A> */}
          </Letters1>
        </Letters>
        <NavigationBar>
          <HomeItem>
            <HomeComponentIcon alt="" src="/home-component.svg" />
            <Home>Home</Home>
          </HomeItem>
          <WorkoutItemNo
            workoutexercisesComponent="/workoutexercises-component1.svg"
            workoutItemNoWidth="unset"
            workoutItemNoPadding="unset"
            workoutItemNoBoxSizing="unset"
            workoutItemNoFlex="1"
            workoutItemNoBackgroundColor="1px solid #000"
            workoutItemNoCursor="pointer"
            onWorkoutItemNoContainerClick={onWorkoutItemNoContainerClick}
            onWorkoutexercisesComponentIconClick={
              onWorkoutexercisesComponentIconClick
            }
          />
          <ProgressItem onClick={onProgressItemContainerClick}>
            <HomeComponentIcon alt="" src="/progress-component.svg" />
            <Progress>Progress</Progress>
          </ProgressItem>
          <CommunityItem>
            <HomeComponentIcon alt="" src="/community-component1.svg" />
            <Home>Community</Home>
          </CommunityItem>
          <CommunityItem>
            <SettingsComponentIcon alt="" src="/settings-component1.svg" />
            <Settings>Settings</Settings>
          </CommunityItem>
        </NavigationBar>
        <IosstatusBarblack>
          <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
          <IOSStatusBarBlackIcon />
        </IosstatusBarblack>
        <ExercisesChild />
        <ScrollBar>
          <ScrollBarChild />
          <ScrollBarItem />
        </ScrollBar>
        <AddItemComponent
          alt=""
          src="/add-item-component.svg"
          onClick={onAddItemComponentClick}
        />
        <MyExercisesWrapper>
          <MyExercises>My Exercises</MyExercises>
        </MyExercisesWrapper>
        <BackCom2Icon
          alt=""
          src="/back-com2.svg"
          onClick={onBackCom2IconClick}
        />
      </ExercisesRoot>
      {isPopupAreYouSureDeleteExOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupAreYouSureDeleteEx}
        >
          <PopupAreYouSureDeleteEx onClose={closePopupAreYouSureDeleteEx} />
        </PortalPopup>
      )}
      {isPopupAreYouSureDeleteEx1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupAreYouSureDeleteEx1}
        >
          <PopupAreYouSureDeleteEx onClose={closePopupAreYouSureDeleteEx1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Exercises6;
