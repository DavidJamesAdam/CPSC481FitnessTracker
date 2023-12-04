import styled from "styled-components";

const ExerciseBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-gainsboro);
  width: 343px;
  height: 216px;
`;
const ChestFlys = styled.div`
  position: relative;
  text-align: ${(p) => p.removeSetTextAlign};
`;
const ExerciseName = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 49.5px);
  height: 41.5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  left: ${(p) => p.removeSetButtonLeft};
`;
const SetBox = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--surface);
  width: 23px;
  height: 21px;
`;
const RepBox = styled.div`
  position: absolute;
  top: 0.3px;
  left: 72px;
  border-radius: var(--br-8xs);
  background-color: var(--surface);
  width: 48px;
  height: 21px;
`;
const RemoveSet = styled.div`
  position: relative;
  display: inline-block;
  width: 63px;
  flex-shrink: 0;
`;
const RemoveSetButton = styled.div`
  position: absolute;
  top: 0px;
  left: 229px;
  border-radius: var(--br-8xs);
  background-color: var(--color-dodgerblue);
  width: 56px;
  height: 21px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
`;
const WeightBox = styled.div`
  position: absolute;
  top: 0px;
  left: 166px;
  border-radius: var(--br-8xs);
  background-color: var(--surface);
  width: 48px;
  height: 21px;
`;
const Set1 = styled.div`
  position: absolute;
  top: 29.7px;
  left: 0px;
  width: 285px;
  height: 21.3px;
`;
const Set11 = styled.div`
  position: absolute;
  top: 60.7px;
  left: 0px;
  width: 285px;
  height: 21.3px;
`;
const Set2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 285px;
  height: 21.3px;
`;
const Sets = styled.div`
  position: absolute;
  top: 72.3px;
  left: 31px;
  width: 285px;
  height: 82px;
  font-size: var(--input-field-label-size);
`;
const ChestFlys1 = styled.div`
  position: relative;
`;
const AddSetText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const AddSetButton = styled.div`
  position: absolute;
  top: 180px;
  left: 29px;
  border-radius: var(--br-8xs);
  background-color: var(--color-dodgerblue);
  width: 80px;
  height: 29px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  text-align: left;
`;
const SetText = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
`;
const WeightText = styled.div`
  position: absolute;
  top: 3px;
  left: 170px;
  width: 63px;
  height: 34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
`;
const RepsText = styled.div`
  position: absolute;
  top: 0px;
  left: 79px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
`;
const Titles = styled.div`
  position: absolute;
  top: 32px;
  left: 19px;
  width: 233px;
  height: 39px;
  text-align: left;
`;
const ExerciseSectionRoot = styled.div`
  position: absolute;
  top: 240px;
  left: 9px;
  width: 343px;
  height: 216px;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--black);
  font-family: var(--body-1);
  top: ${(p) => p.setBoxTop};
`;

const ExerciseForm = ({
  exerciseName,
  setBoxTop,
  removeSetButtonLeft,
  removeSetTextAlign,
}) => {
  return (
    <ExerciseSectionRoot setBoxTop={setBoxTop}>
      <ExerciseBackground />
      <ExerciseName removeSetButtonLeft={removeSetButtonLeft}>
        <ChestFlys removeSetTextAlign={removeSetTextAlign}>
          {exerciseName}
        </ChestFlys>
      </ExerciseName>
      <Sets>
        <Set1>
          <SetBox />
          <RepBox />
          <RemoveSetButton>
            <RemoveSet>Remove set</RemoveSet>
          </RemoveSetButton>
          <WeightBox />
        </Set1>
        <Set11>
          <SetBox />
          <RepBox />
          <RemoveSetButton>
            <RemoveSet>Remove set</RemoveSet>
          </RemoveSetButton>
          <WeightBox />
        </Set11>
        <Set2>
          <SetBox />
          <RepBox />
          <RemoveSetButton>
            <RemoveSet>Remove set</RemoveSet>
          </RemoveSetButton>
          <WeightBox />
        </Set2>
      </Sets>
      <AddSetButton>
        <AddSetText>
          <ChestFlys1>Add Set</ChestFlys1>
        </AddSetText>
      </AddSetButton>
      <Titles>
        <SetText>
          <ChestFlys1>Set</ChestFlys1>
        </SetText>
        <WeightText>
          <ChestFlys1>Weight</ChestFlys1>
        </WeightText>
        <RepsText>
          <ChestFlys1>Reps</ChestFlys1>
        </RepsText>
      </Titles>
    </ExerciseSectionRoot>
  );
};

export default ExerciseForm;
