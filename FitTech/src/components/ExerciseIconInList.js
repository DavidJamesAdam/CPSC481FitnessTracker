import styled from "styled-components";

const BackgroundBox = styled.div`
    background-color: #757D90;
    border: 3px solid black;
    border-radius: var(--br-8xs);
    width: 325px;
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const ImagePreview = styled.img`
    width: 125px;
    margin-right: 10px;
`;

const ExerciseName = styled.div`
    font-size: 20px;
    margin-right: 20px;
`;

const DeleteButton = styled.img`
    width: 30px;
    cursor: pointer;
    align-self: flex-start;
    margin: -10px;
    
`;

const Button = styled.div`
//   padding: 15px;
//   padding-top: 10px;
//   padding-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--color-dodgerblue);
  border-radius: var(--br-8xs);
  text-align: center;
  width: 75px;

  cursor: pointer;
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;


const ExerciseIconInList = ({ imagePreview, exerciseName, viewClick, editClick, deleteClick }) => {

    return (
        <>
            <BackgroundBox >
                <ImagePreview src={imagePreview} alt="" />
                <ColumnWrapper>
                    <ExerciseName>{exerciseName}</ExerciseName>
                    <RowWrapper>
                        <Button onClick={editClick}>Edit</Button>
                        <Button onClick={viewClick}>View</Button>
                    </RowWrapper>
                </ColumnWrapper>
                <DeleteButton src="deleteImage.svg" alt="" onClick={deleteClick}/>
            </BackgroundBox>
        </>
    )
}


export default ExerciseIconInList;