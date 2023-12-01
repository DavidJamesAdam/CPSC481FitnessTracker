import styled from "styled-components";

const C = styled.b`
  position: relative;
  -webkit-text-stroke: 1px #000;
`;
const Property1cChestExerciseRoot = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-dimgray-200);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 345px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-8xs);
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--white);
  font-family: var(--community);
`;

const Property1CChestExercise = () => {
  return (
    <Property1cChestExerciseRoot>
      <C>C</C>
    </Property1cChestExerciseRoot>
  );
};

export default Property1CChestExercise;
