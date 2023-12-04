import styled from "styled-components";
import { useState, useCallback } from "react";
import PopupAreYouSureDeleteEx from "./PopupAreYouSureDeleteEx";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";

const B = styled.b`
  position: relative;
  -webkit-text-stroke: 1px #000;
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
const Edit2 = styled.p`
  margin: 0;
`;
const View1 = styled.div`
  position: relative;
  font-weight: 300;
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
const Edit1 = styled.div`
  position: relative;
  font-weight: 300;
  display: inline-block;
  width: 43px;
  height: 31px;
  flex-shrink: 0;
`;
const Property1bChestExercisePRoot = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-dimgray-200);
  border: 1px solid var(--black);
  width: 345px;
  height: 100px;
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--white);
  font-family: var(--community);
`;

const BarbellBench = styled.div`
  position: absolute;
  top: 48px;
  left: -20px;
  width: 372px;
  height: 131px;
  font-size: var(--font-size-3xl);
`;
const BarbellBench2 = styled.div`
  position: absolute;
  top: 46px;
  left: -21px;
  width: 372px;
  height: 131px;
  font-size: var(--font-size-3xl);
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

const Property1BChestExerciseP = () => {
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
  navigate(-1);
}, [navigate]);
  return (
    <Property1bChestExercisePRoot>
      <B>B
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
    </Property1bChestExercisePRoot>
  );
};

export default Property1BChestExerciseP;
