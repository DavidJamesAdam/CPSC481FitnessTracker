import styled from "styled-components";
import LineMdconfirmCircleTwotoneIcon from "./LineMdconfirmCircleTwotoneIcon";

const WorkoutText = styled.div`
`;

const PopUpBackground = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-gainsboro);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 341px;
  height: 196px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const PopupWrapper = styled.div`
    width: 341px;
    height: 196px;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    text-align: left;
    font-size: var(--font-size-3xl);
    color: var(--black);
    font-family: var(--community);
    top: ${(props) => props.top};
    left: ${(props) => props.left};
`;

const CheckMark = styled.img`
    width: 67px;
    height: 67px;
    cursor: pointer;
`;

const XMark = styled.img`
    width: 67px;
    height: 67px;
    cursor: pointer;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const PopUp = ({ text, top, left, checkMarkClick, deleteImage, onXMarkCloseClick }) => {

    return (
        <>
            <PopupWrapper top={top} left={left}>
                <PopUpBackground>
                    <WorkoutText>{text}</WorkoutText>
                    <ButtonWrapper>
                        {
                            deleteImage !== undefined ? (
                                <XMark src={deleteImage} alt="" onClick={onXMarkCloseClick}/>
                            ) : null
                        }
                        <CheckMark src="/linemdconfirmcircletwotone.svg" alt="" onClick={checkMarkClick} />
                    </ButtonWrapper>
                </PopUpBackground>
            </PopupWrapper>
        </>
    )
}



export default PopUp;


