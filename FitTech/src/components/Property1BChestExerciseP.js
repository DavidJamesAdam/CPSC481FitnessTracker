import styled from "styled-components";
import { useState, useCallback } from "react";
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


const MdigarbageCanOutlineIcon = styled.img`
  position: absolute;
  top: 3px;
  left: 330px;
  border-radius: var(--br-xl);
  width: 29px;
  height: 29px;
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

const Property1bChestExercisePRoot = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-dimgray-200);
  border: 1px solid var(--black);
  width: 345px;
  height: 400px;
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



const BarbellBenchBoarder = styled.div`
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
const navigate = useNavigate();

const onEditContainerClick = useCallback(() => {
  navigate("/exercise-screen-edit");
}, [navigate]);

const onViewContainerClick = useCallback(() => {
  navigate("/exercise-screen-view");
}, [navigate]);

const addToWorkoutList = useCallback(() => {
  navigate("/workout-screen-exercise-added");
}, []);

const onProgressItemContainerClick = useCallback(() => {
  // Please sync "Progresss screen" to the project
}, []);

const onBackCom2IconClick = useCallback(() => {
  navigate(-1);
}, [navigate]);
  return (
    <Property1bChestExercisePRoot>
      <B>B
        <BarbellBench>
          <BarbellBenchBoarder />
            <Crunches>Barbell Bench</Crunches>
              <BarbellBenchIcon src="/barbell-bench2@2x.png" />
              <Edit onClick={onEditContainerClick}>Edit</Edit>
              <View2 onClick={onViewContainerClick}>View</View2>
              <MdigarbageCanOutlineIcon
                  src="/add-item-component.svg"
                  onClick={addToWorkoutList}
                />
              </BarbellBench>
            </B>
    </Property1bChestExercisePRoot>
  );
};

export default Property1BChestExerciseP;
