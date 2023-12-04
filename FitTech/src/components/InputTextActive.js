import styled from "styled-components";

const EnterWorkoutName = styled.input`
  flex: 1;
  position: relative;
`;
const Textbox = styled.div`
  align-self: stretch;
  border-radius: var(--br-9xs);
  background-color: var(--white);
  border: 1px solid var(--gray);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs);
  flex: ${(p) => p.propFlex};
`;
const InputtextactiveRoot = styled.div
  `position: absolute;
  top: 152px;
  left: 96px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--body-1-size);
  color: var(--gray);
  font-family: var(--input-field-label);
  top: ${(p) => p.propTop}
  left: ${(p) => p.propLeft}
  width: ${(p) => p.propWidth}
  height: ${(p) => p.propHeight}
`;

const InputTextActive = ({
  workoutNamePlaceholder,
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propFlex,
}) => {

  const handleInput = () => {
    console.log("Input detected");
  }
  return (
    <InputtextactiveRoot
      propTop={propTop}
      propLeft={propLeft}
      propWidth={propWidth}
      propHeight={propHeight}
    >
      <Textbox propFlex={propFlex}>
        <EnterWorkoutName input="text" placeholder={workoutNamePlaceholder} onChange={handleInput}></EnterWorkoutName>
      </Textbox>
    </InputtextactiveRoot>
  );
};

export default InputTextActive;
