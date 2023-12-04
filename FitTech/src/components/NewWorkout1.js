import { useState, useCallback } from "react";
import PopupAreYouSureDeleteEx from "./PopupAreYouSureDeleteEx";
import PortalPopup from "./PortalPopup";
import PopupWorkoutUpdated from "./PopupWorkoutUpdated";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import Vaadinbutton from "./Vaadinbutton";
import View from "./View";

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
const BackCom2Icon = styled.img`
  position: absolute;
  top: 47px;
  left: 18px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
`;
const ChestDay = styled.div`
  position: absolute;
  top: 91px;
  left: 126px;
  text-decoration: underline;
`;
const AddItemComponent = styled.img`
  position: absolute;
  top: 283px;
  left: 140px;
  width: 113px;
  height: 105px;
  cursor: pointer;
`;
const BarbellBenchChild = styled.div`
  position: absolute;
  top: -2px;
  left: 32px;
  border-radius: var(--br-10xs);
  background-color: var(--color-slategray-200);
  border: 2px solid var(--black);
  box-sizing: border-box;
  width: 308px;
  height: 107px;
`;
const BarbellBench1 = styled.b`
  position: absolute;
  top: 8px;
  left: 154px;
  display: inline-block;
  width: 141px;
  height: 23px;
`;
const BarbellBenchIcon = styled.img`
  position: absolute;
  top: 8px;
  left: 44px;
  border-radius: var(--br-xl);
  width: 100px;
  height: 86px;
  object-fit: cover;
`;

const BarbellBench = styled.div`
  position: absolute;
  top: 168px;
  left: 11px;
  width: 372px;
  height: 131px;
  font-size: var(--font-size-xl);
`;
const NewWorkoutChild = styled.div`
  position: absolute;
  top: 702px;
  left: 271px;
  border-radius: var(--br-8xs);
  background-color: var(--gray);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 112px;
  height: 62px;
`;
const Finish = styled.div`
  position: absolute;
  top: 714px;
  left: 282px;
  color: var(--black);
  cursor: pointer;
`;
const UileditIcon = styled.img`
  position: absolute;
  top: 91px;
  left: 306px;
  width: 47px;
  height: 45px;
  cursor: pointer;
`;
const NewWorkoutRoot = styled.div`
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
  font-size: var(--font-size-13xl);
  color: var(--white);
  font-family: var(--community);
`;

const NewWorkout1 = () => {
  const [isPopupAreYouSureDeleteExOpen, setPopupAreYouSureDeleteExOpen] =
    useState(false);
  const [isPopupWorkoutUpdatedOpen, setPopupWorkoutUpdatedOpen] =
    useState(false);
  const navigate = useNavigate();

  const onViewContainerClick = useCallback(() => {
    navigate("/exercise-screen-view");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onAddItemComponentClick = useCallback(() => {
    navigate("/workout-screen-choose-exercise-category-view");
  }, [navigate]);

  const openPopupAreYouSureDeleteEx = useCallback(() => {
    setPopupAreYouSureDeleteExOpen(true);
  }, []);

  const closePopupAreYouSureDeleteEx = useCallback(() => {
    setPopupAreYouSureDeleteExOpen(false);
  }, []);

  const openPopupWorkoutUpdated = useCallback(() => {
    setPopupWorkoutUpdatedOpen(true);
  }, []);

  const closePopupWorkoutUpdated = useCallback(() => {
    setPopupWorkoutUpdatedOpen(false);
  }, []);

  const onUileditIconClick = useCallback(() => {
    navigate("/workout-edit");
  }, [navigate]);

  return (
    <>
      <NewWorkoutRoot>
        <IosstatusBarblack>
          <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
          <IOSStatusBarBlackIcon />
        </IosstatusBarblack>
        <BackCom2Icon
          alt=""
          src="/back-com2.svg"
          onClick={onBackCom2IconClick}
        />
        <ChestDay>Chest Day</ChestDay>
        <Vaadinbutton />
        <AddItemComponent
          alt=""
          src="/add-item-component.svg"
          onClick={onAddItemComponentClick}
        />
        <BarbellBench>
          <BarbellBenchChild />
          <BarbellBench1>Barbell Bench</BarbellBench1>
          <BarbellBenchIcon alt="" src="/barbell-bench@2x.png" />
          <View
            viewPosition="absolute"
            viewTop="67px"
            viewLeft="197px"
            viewCursor="pointer"
            onViewContainerClick={onViewContainerClick}
          />
        </BarbellBench>
        <NewWorkoutChild />
        <Finish onClick={openPopupWorkoutUpdated}>Finish</Finish>
        <UileditIcon alt="" src="/uiledit.svg" onClick={onUileditIconClick} />
      </NewWorkoutRoot>
      {isPopupAreYouSureDeleteExOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupAreYouSureDeleteEx}
        >
          <PopupAreYouSureDeleteEx onClose={closePopupAreYouSureDeleteEx} />
        </PortalPopup>
      )}
      {isPopupWorkoutUpdatedOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupWorkoutUpdated}
        >
          <PopupWorkoutUpdated onClose={closePopupWorkoutUpdated} />
        </PortalPopup>
      )}
    </>
  );
};

export default NewWorkout1;
