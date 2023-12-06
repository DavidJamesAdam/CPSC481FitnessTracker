import { useState, useCallback, useEffect, useRef } from "react";
import PopupAreYouSureDeleteEx from "./PopupAreYouSureDeleteEx";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import WorkoutItemNo from "./WorkoutItemNo";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import ExerciseIconInList from "./ExerciseIconInList";
import PopUp from "./PopUp";
import PortalPopup from "./PortalPopup";
import { v4 as uuidv4 } from 'uuid';

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
  height: 179px;
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
  left: 25px;
  width: 450px;
  min-height: 600px;
  // height: 1650px;
  font-size: var(--font-size-13xl);
  overflow: auto;
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
  box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
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

const Scrollframe1 = styled.div`
  position: relative;
  top: 100px;
  margin-left: 25px;
  width: 375px;
  height: 603px;
  overflow-y: auto;
`;

const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  padding-bottom: 10px;
`;

const Exercises6 = ({ data }) => {

  const navigate = useNavigate();

  const [areYouSureDeletePopup, setAreYouSureDeletePopup] = useState(false);

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
    setAreYouSureDeletePopup(true);
  }, []);

  const closePopupAreYouSureDeleteEx = useCallback(() => {
    setPopupAreYouSureDelete(false);
  }, []);

  const onEditContainer1Click = useCallback((exercise) => {
    navigate("/exercise-screen-edit", { state: { data: exercise } });
  }, [navigate]);

  const onViewContainer1Click = useCallback((exercise) => {
    navigate("/exercise-screen-view", { state: { data: exercise } });
  }, [navigate]);

  const onProgressNavClick = useCallback(() => {
    navigate("/progress-screen-main");
  }, [navigate]);

  const onAddItemComponentClick = useCallback(() => {
    navigate("/exercise-screen-create");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const closePopupAreYouSureDelete = useCallback(() => {
    setAreYouSureDeletePopup(false);
  }, []);

  const [itemToDelete, setItemToDelete] = useState('');


  const deleteClick = (name) => {
    setItemToDelete(name);
    openPopupAreYouSureDeleteEx();
  }

  const { state } = useLocation();


  const [alphabetHashtable, setAlphabetHashtable] = useState(() => {
    // Create arrays for each letter
    let newHashtable = {};
    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
      newHashtable[letter] = [];
    }
    newHashtable['B'].push({name: "Barbell Bench", element: <ExerciseIconInList imagePreview={"barbell-bench@2x.png"} exerciseName={"Barbell Bench"} viewClick={() => onViewContainer1Click("Barbell Bench")}
      editClick={() => onEditContainer1Click("Barbell Bench")} deleteClick={() => deleteClick('Barbell Bench')} />});
    newHashtable['C'].push({name: 'Crunches', element: <ExerciseIconInList imagePreview={"crunchimage@2x.png"} exerciseName={"Crunches"} viewClick={() => onViewContainer1Click("Crunches")}
      editClick={() => onEditContainer1Click("Crunches")} deleteClick={() => deleteClick('Crunches')}/>});
    newHashtable['P'].push({name: 'Pulldowns', element: <ExerciseIconInList imagePreview={"crunchimage@2x.png"} exerciseName={"Pulldowns"} viewClick={() => onViewContainer1Click("Pulldowns")}
      editClick={() => onEditContainer1Click("Pulldowns")} deleteClick={() => deleteClick('Pulldowns')}/>});

    const data = state?.data;
    if (/^[a-zA-Z]$/.test(data)) {
      const letter = data.charAt(0).toUpperCase();
      console.log(`data: ${data}`)
      newHashtable[letter].push({name: data, element: <ExerciseIconInList imagePreview={"barbell-bench@2x.png"} exerciseName={data} viewClick={() => onViewContainer1Click(data)}
      editClick={() => onEditContainer1Click(data)} deleteClick={() => deleteClick(data)} />})
    }
    return newHashtable;
  });

  const onCloseHandler = useCallback(() => {
    closePopupAreYouSureDelete();
    const editedAlphabetHashtable = alphabetHashtable;
    const letter = itemToDelete.charAt(0).toUpperCase();
    console.log(`letter ${letter}`);
    console.log(`item to delete ${itemToDelete}`);
    editedAlphabetHashtable[letter] = editedAlphabetHashtable[letter].filter(item => {
      console.log(`item name ${item.name}`);
      console.log(`test ${itemToDelete}`);
      console.log(item.name !== itemToDelete);
      return item.name !== itemToDelete;
    });
    console.log(editedAlphabetHashtable);
    
    // console.log(`edited: ${editedAlphabetHashtable[letter][0].name}`);
    // console.log(editedAlphabetHashtable);

    setAlphabetHashtable(editedAlphabetHashtable);
  }, [itemToDelete, alphabetHashtable])

  const onXMarkCloseHandler = useCallback(() => {
    navigate(0);
  }, [navigate]);


  // // Check if the value of data1 has changed
  // if (previousDataRef.current !== data) {
  //   console.log('Data1 has changed:', data);

  //   // Your logic or side effects when data1 changes

  //   setAlphabetHashtable((prevHashtable) => {
  //     const updatedHashtable = { ...prevHashtable };
  //     const letter = data.charAt(0).toUpperCase();
  //     updatedHashtable[letter].push(<ExerciseIconInList imagePreview={"barbell-bench@2x.png"} exerciseName={data} viewClick={() => onViewContainer1Click(data)}
  //       editClick={() => onEditContainer1Click(data)} deleteClick={deleteClick} />)
  //     console.log(`data: ${data}`)
  //     console.log(updatedHashtable);
  //   });
  //   // Update the previousDataRef to the new value of data1
  //   previousDataRef.current = data;
  // }

  // const data = state?.data;

  // useEffect(() => {
  //   setNewExercise(data);
  // }, [data])

  // useEffect (() => {
  //   if (data !== undefined) setAlphabetHashtable((prevHashtable) => {
  //     const updatedHashtable = {...prevHashtable};
  //     const letter = data.charAt(0).toUpperCase();
  //     updatedHashtable[letter].push(<ExerciseIconInList imagePreview={"barbell-bench@2x.png"} exerciseName={data} viewClick={() => onViewContainer1Click(data)}
  //       editClick={() => onEditContainer1Click(newExercise)} deleteClick={deleteClick} />)
  //     console.log(`data: ${newExercise}`)
  //     console.log(updatedHashtable);
  //     return updatedHashtable;
  //   });  
  // }, [newExercise, alphabetHashtable]);

  return (
    <>
      <ExercisesRoot>
        <IosstatusBarblack>
          <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
          <IOSStatusBarBlackIcon />
        </IosstatusBarblack>
        <MyExercisesWrapper>
          <MyExercises>My Exercises</MyExercises>
        </MyExercisesWrapper>
        <Scrollframe1>
          {Object.keys(alphabetHashtable).map((letter) => (
            <div key={letter}>
              <h2>{letter}</h2>
              <UL>
                {alphabetHashtable[letter].map(({name, element}) => (
                  <StyledLi key={name}>{element}</StyledLi>
                ))}
              </UL>
            </div>
          ))}
        </Scrollframe1>
        {areYouSureDeletePopup && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            onOutsideClick={onXMarkCloseHandler}
          >
            <PopUp onClose={onCloseHandler} text="Delete Exercise?" top="86px" left="523px" checkMarkClick={onCloseHandler} onXMarkCloseClick={onXMarkCloseHandler} deleteImage="deleteImage.svg" />
          </PortalPopup>
        )}
        <AddItemComponent
          alt=""
          src="/add-item-component.svg"
          onClick={onAddItemComponentClick}
        />
        <BackCom2Icon
          alt=""
          src="/back-com2.svg"
          onClick={onBackClick}
        />
      </ExercisesRoot>
      {/* {isPopupAreYouSureDeleteExOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupAreYouSureDeleteEx}
        >
          <PopupAreYouSureDeleteEx onClose={closePopupAreYouSureDeleteEx} />
        </PortalPopup>
      )} */}
      {/* {isPopupAreYouSureDeleteEx1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupAreYouSureDeleteEx1}
        >
          <PopupAreYouSureDeleteEx onClose={closePopupAreYouSureDeleteEx1} />
        </PortalPopup>
      )} */}
    </>
  );
}

export default Exercises6;
