import ProgressScreenContainer from "../components/ProgressScreenContainer";
import styled from "styled-components";

const ProgressScreenMainRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1024px;
  overflow: hidden;
`;

const ProgressScreenMain = () => {
  return (
    <ProgressScreenMainRoot>
      <ProgressScreenContainer />
    </ProgressScreenMainRoot>
  );
};

export default ProgressScreenMain;
