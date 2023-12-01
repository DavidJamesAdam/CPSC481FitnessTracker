import { useState, useCallback } from "react";
import PopupSearchBar from "./PopupSearchBar";
import PortalPopup from "./PortalPopup";
import PopupFilter from "./PopupFilter";
import styled from "styled-components";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import Vaadinbutton from "./Vaadinbutton";
import { useNavigate } from "react-router-dom";
import StreamlinehealthMedicalHearIco from "./StreamlinehealthMedicalHearIco";

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
const ChestDay = styled.div`
  position: absolute;
  top: 91px;
  left: 113px;
  font-size: var(--font-size-13xl);
  text-decoration: underline;
  color: var(--white);
`;
const YourListAppears = styled.div`
  position: absolute;
  top: 154px;
  left: 56px;
  font-size: var(--font-size-xl);
  color: var(--white);
`;
const NewWorkoutChild = styled.div`
  position: absolute;
  top: 198px;
  left: 22px;
  background-color: var(--color-gainsboro);
  width: 351px;
  height: 571px;
`;
const NewWorkoutItem = styled.div`
  position: absolute;
  top: 207px;
  left: 32px;
  border-radius: var(--br-8xs);
  background-color: var(--color-whitesmoke);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 132px;
  height: 36px;
`;
const Categories = styled.div`
  position: absolute;
  top: 211px;
  left: 36px;
  font-size: var(--font-size-5xl);
`;
const Exercises7 = styled.div`
  position: absolute;
  top: 270px;
  left: 44px;
  font-size: var(--font-size-5xl);
  cursor: pointer;
`;
const NewWorkoutInner = styled.div`
  position: absolute;
  top: 334px;
  left: 54px;
  background-color: var(--white);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 96px;
  height: 94px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 334px;
  left: 150px;
  background-color: var(--white);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 96px;
  height: 94px;
`;
const NewWorkoutChild1 = styled.div`
  position: absolute;
  top: 334px;
  left: 246px;
  background-color: var(--white);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 96px;
  height: 94px;
`;
const NewWorkoutChild2 = styled.div`
  position: absolute;
  top: 428px;
  left: 54px;
  background-color: var(--white);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 96px;
  height: 94px;
`;
const Cardio = styled.div`
  position: absolute;
  top: 432px;
  left: 76px;
`;
const NewWorkoutChild3 = styled.div`
  position: absolute;
  top: 428px;
  left: 150px;
  background-color: var(--white);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 96px;
  height: 94px;
`;
const NewWorkoutChild4 = styled.div`
  position: absolute;
  top: 428px;
  left: 246px;
  background-color: var(--white);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 96px;
  height: 94px;
`;
const NewWorkoutChild5 = styled.div`
  position: absolute;
  top: 522px;
  left: 54px;
  background-color: var(--white);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 96px;
  height: 94px;
`;
const NewWorkoutChild6 = styled.div`
  position: absolute;
  top: 522px;
  left: 150px;
  background-color: var(--white);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 96px;
  height: 94px;
`;
const NewWorkoutChild7 = styled.div`
  position: absolute;
  top: 522px;
  left: 246px;
  background-color: var(--white);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 96px;
  height: 94px;
`;
const NewWorkoutChild8 = styled.div`
  position: absolute;
  top: 616px;
  left: 54px;
  background-color: var(--white);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 96px;
  height: 94px;
`;
const NewWorkoutChild9 = styled.div`
  position: absolute;
  top: 616px;
  left: 150px;
  background-color: var(--white);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 96px;
  height: 94px;
`;
const NewWorkoutChild10 = styled.div`
  position: absolute;
  top: 616px;
  left: 246px;
  background-color: var(--white);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 96px;
  height: 94px;
`;
const MaterialSymbolslineEndArro = styled.div`
  position: absolute;
  top: 652px;
  left: 296px;
  width: 46px;
  height: 44px;
`;
const MaterialSymbolslineEndArro1 = styled.div`
  position: absolute;
  top: 652px;
  left: 100px;
  width: 46px;
  height: 43px;
  transform: rotate(180deg);
  transform-origin: 0 0;
`;
const Image1Icon = styled.img`
  position: absolute;
  top: 357px;
  left: 65px;
  width: 73px;
  height: 68px;
  object-fit: cover;
`;
const Back = styled.div`
  position: absolute;
  top: 334px;
  left: 81px;
`;
const Image2Icon = styled.img`
  position: absolute;
  top: 357px;
  left: 165px;
  width: 64px;
  height: 64px;
  object-fit: cover;
`;
const Abs = styled.div`
  position: absolute;
  top: 334px;
  left: 181px;
`;
const Image3Icon = styled.img`
  position: absolute;
  top: 355px;
  left: 258px;
  width: 71px;
  height: 72px;
  object-fit: cover;
`;
const Biceps = styled.div`
  position: absolute;
  top: 335px;
  left: 268px;
`;
const IctwotoneSearchIcon = styled.img`
  position: absolute;
  top: 210px;
  left: 276px;
  width: 36px;
  height: 33px;
  cursor: pointer;
`;
const MdifilterIcon = styled.img`
  position: absolute;
  top: 209px;
  left: 323px;
  width: 34px;
  height: 34px;
  cursor: pointer;
`;
const Deltoids = styled.div`
  position: absolute;
  top: 432px;
  left: 265px;
`;
const Image16Icon = styled.img`
  position: absolute;
  top: 554px;
  left: 55px;
  width: 87px;
  height: 60px;
  object-fit: cover;
`;
const Quads = styled.div`
  position: absolute;
  top: 527px;
  left: 77px;
`;
const Image17Icon = styled.img`
  position: absolute;
  top: 554px;
  left: 154px;
  width: 92px;
  height: 60px;
  object-fit: cover;
`;
const Calves = styled.div`
  position: absolute;
  top: 527px;
  left: 174px;
`;
const Image18Icon = styled.img`
  position: absolute;
  top: 554px;
  left: 250px;
  width: 85px;
  height: 60px;
  object-fit: cover;
`;
const Glutes = styled.div`
  position: absolute;
  top: 527px;
  left: 269px;
`;
const Image19Icon = styled.img`
  position: absolute;
  top: 643px;
  left: 58px;
  width: 87px;
  height: 64px;
  object-fit: cover;
`;
const Tricepts = styled.div`
  position: absolute;
  top: 621px;
  left: 76px;
`;
const Image20Icon = styled.img`
  position: absolute;
  top: 643px;
  left: 154px;
  width: 87px;
  height: 65px;
  object-fit: cover;
`;
const Trapezus = styled.div`
  position: absolute;
  top: 621px;
  left: 162px;
`;
const Image21Icon = styled.img`
  position: absolute;
  top: 643px;
  left: 250px;
  width: 87px;
  height: 64px;
  object-fit: cover;
`;
const Forearms = styled.div`
  position: absolute;
  top: 624px;
  left: 258px;
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
  font-size: var(--font-size-base);
  color: var(--black);
  font-family: var(--community);
`;

const NewWorkout2 = () => {
  const [isPopupSearchBarOpen, setPopupSearchBarOpen] = useState(false);
  const [isPopupFilterOpen, setPopupFilterOpen] = useState(false);
  const navigate = useNavigate();

  const onExercisesTextClick = useCallback(() => {
    navigate("/workout-screen-choose-exercise-list-view");
  }, [navigate]);

  const openPopupSearchBar = useCallback(() => {
    setPopupSearchBarOpen(true);
  }, []);

  const closePopupSearchBar = useCallback(() => {
    setPopupSearchBarOpen(false);
  }, []);

  const openPopupFilter = useCallback(() => {
    setPopupFilterOpen(true);
  }, []);

  const closePopupFilter = useCallback(() => {
    setPopupFilterOpen(false);
  }, []);

  return (
    <>
      <NewWorkoutRoot>
        <IosstatusBarblack>
          <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
          <IOSStatusBarBlackIcon />
        </IosstatusBarblack>
        <ChestDay>Chest Day</ChestDay>
        <YourListAppears>Your list appears to be empty</YourListAppears>
        <Vaadinbutton />
        <NewWorkoutChild />
        <NewWorkoutItem />
        <Categories>Categories</Categories>
        <Exercises7 onClick={onExercisesTextClick}>Exercises</Exercises7>
        <NewWorkoutInner />
        <RectangleDiv />
        <NewWorkoutChild1 />
        <NewWorkoutChild2 />
        <Cardio>Cardio</Cardio>
        <NewWorkoutChild3 />
        <NewWorkoutChild4 />
        <NewWorkoutChild5 />
        <NewWorkoutChild6 />
        <NewWorkoutChild7 />
        <NewWorkoutChild8 />
        <NewWorkoutChild9 />
        <NewWorkoutChild10 />
        <MaterialSymbolslineEndArro />
        <MaterialSymbolslineEndArro1 />
        <Image1Icon alt="" src="/image-1@2x.png" />
        <Back>Back</Back>
        <Image2Icon alt="" src="/image-2@2x.png" />
        <Abs>Abs</Abs>
        <Image3Icon alt="" src="/image-3@2x.png" />
        <Biceps>Biceps</Biceps>
        <IctwotoneSearchIcon
          alt=""
          src="/ictwotonesearch.svg"
          onClick={openPopupSearchBar}
        />
        <StreamlinehealthMedicalHearIco />
        <MdifilterIcon alt="" src="/mdifilter1.svg" onClick={openPopupFilter} />
        <Deltoids>Deltoids</Deltoids>
        <Image16Icon alt="" src="/image-16@2x.png" />
        <Quads>Quads</Quads>
        <Image17Icon alt="" src="/image-17@2x.png" />
        <Calves>Calves</Calves>
        <Image18Icon alt="" src="/image-18@2x.png" />
        <Glutes>Glutes</Glutes>
        <Image19Icon alt="" src="/image-19@2x.png" />
        <Tricepts>Tricepts</Tricepts>
        <Image20Icon alt="" src="/image-20@2x.png" />
        <Trapezus>Trapezus</Trapezus>
        <Image21Icon alt="" src="/image-21@2x.png" />
        <Forearms>Forearms</Forearms>
      </NewWorkoutRoot>
      {isPopupSearchBarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupSearchBar}
        >
          <PopupSearchBar onClose={closePopupSearchBar} />
        </PortalPopup>
      )}
      {isPopupFilterOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupFilter}
        >
          <PopupFilter onClose={closePopupFilter} />
        </PortalPopup>
      )}
    </>
  );
};

export default NewWorkout2;
