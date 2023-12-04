import styled from "styled-components";

const ProgressComponentIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ProgressItemyesRoot = styled.div`
  background-color: var(--black);
  width: 56px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) 0px;
  box-sizing: border-box;
`;

const ProgressNavTabYes = () => {
  return (
    <ProgressItemyesRoot>
      <ProgressComponentIcon alt="" src="/progress-component.svg" />
    </ProgressItemyesRoot>
  );
};

export default ProgressNavTabYes;
