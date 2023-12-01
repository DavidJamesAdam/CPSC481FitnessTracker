import styled from "styled-components";
import InputTextActive from "./InputTextActive";

const FullName = styled.div`
  position: relative;
`;
const FullNameWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-3xs) var(--padding-10xs) 0px;
`;
const FullNameInputRoot = styled.div`
  position: absolute;
  top: 206px;
  left: 47px;
  width: 200px;
  height: 72px;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--white);
  font-family: var(--community);
  top: ${(p) => p.propTop};
`;

const FormContainer1 = ({ userInfo, userFullName, propTop }) => {
  return (
    <FullNameInputRoot propTop={propTop}>
      <FullNameWrapper>
        <FullName>{userInfo}</FullName>
      </FullNameWrapper>
      <InputTextActive
        workoutNamePlaceholder="Name"
        propTop="42px"
        propLeft="0px"
        propWidth="200px"
        propHeight="unset"
        propFlex="unset"
      />
    </FullNameInputRoot>
  );
};

export default FormContainer1;
