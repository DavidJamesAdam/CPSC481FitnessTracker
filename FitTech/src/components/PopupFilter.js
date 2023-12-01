import styled from "styled-components";

const PopupFilterChild = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-8xs);
  background-color: var(--color-gainsboro);
  border: 1px solid var(--black);
  box-sizing: border-box;
`;
const UilenterIcon = styled.img`
  position: absolute;
  height: 83.67%;
  width: 16.73%;
  top: 14.29%;
  right: 1.9%;
  bottom: 2.04%;
  left: 81.37%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const MdifilterIcon = styled.img`
  position: absolute;
  height: 63.27%;
  width: 13.69%;
  top: 18.37%;
  right: 83.27%;
  bottom: 18.37%;
  left: 3.04%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Label = styled.div`
  position: relative;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  display: none;
`;
const Textbox = styled.div`
  align-self: stretch;
  border-radius: var(--br-9xs);
  background-color: var(--white);
  border: 1px solid var(--gray);
`;
const Input = styled.div`
  position: absolute;
  width: 61.6%;
  top: calc(50% - 15.5px);
  right: 19.01%;
  left: 19.39%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const PopupFilterRoot = styled.div`
  width: 263px;
  height: 49px;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: left;
  font-size: var(--input-field-label-size);
  color: var(--black);
  font-family: var(--input-field-label);
`;

const PopupFilter = () => {
  return (
    <PopupFilterRoot>
      <PopupFilterChild />
      <UilenterIcon alt="" src="/uilenter.svg" />
      <MdifilterIcon alt="" src="/mdifilter.svg" />
      <Input>
        <Label>Label</Label>
        <Textbox />
      </Input>
    </PopupFilterRoot>
  );
};

export default PopupFilter;
