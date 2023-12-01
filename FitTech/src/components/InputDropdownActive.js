import styled from "styled-components";

const PleaseSelectExercise = styled.div`
  position: relative;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;
const Exercises7 = styled.div`
  flex: 1;
  position: relative;
`;
const ChevronIcon = styled.img`
  position: relative;
  width: 10px;
  height: 10px;
`;
const DropdownBox = styled.div`
  align-self: stretch;
  border-radius: var(--br-9xs);
  background-color: var(--white);
  border: 1px solid var(--gray);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs);
  gap: var(--gap-3xs);
  color: var(--gray);
  font-family: var(--input-field-label);
`;
const InputdropdownactiveRoot = styled.div`
  width: 245px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  text-align: left;
  font-size: var(--body-1-size);
  color: var(--white);
  font-family: var(--community);
  width: ${(p) => p.inputDropdownActiveWidth};
`;

const InputDropdownActive = ({
  pleaseSelectExercise,
  exercises,
  showPleaseSelectExercise,
  inputDropdownActiveWidth,
}) => {
  return (
    <InputdropdownactiveRoot
      inputDropdownActiveWidth={inputDropdownActiveWidth}
    >
      {showPleaseSelectExercise && (
        <PleaseSelectExercise>{pleaseSelectExercise}</PleaseSelectExercise>
      )}
      <DropdownBox>
        <Exercises7>{exercises}</Exercises7>
        <ChevronIcon alt="" src="/chevron.svg" />
      </DropdownBox>
    </InputdropdownactiveRoot>
  );
};

export default InputDropdownActive;
