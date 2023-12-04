import styled from "styled-components";

const B = styled.b`
  position: relative;
  -webkit-text-stroke: 1px #000;
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

const Property1BChestExerciseP = () => {
  return (
    <Property1bChestExercisePRoot>
      <B>B</B> 
    </Property1bChestExercisePRoot>
  );
};

export default Property1BChestExerciseP;
