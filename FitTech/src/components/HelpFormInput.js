import styled from "styled-components";

const FormTitle = styled.div `
`;

const Input = styled.input `
    // position: absolute;
    // top: 374px;
    // left: 47px;
    margin-top: 10px;
    width: 200px;
    height: ${(props) => props.inputHeight || '25px'};
`;

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
`;

const HelpFormInput = ({titleText, placeholder, inputHeight}) => {
    return (
        <Wrapper>
        <FormTitle>{titleText}</FormTitle>
        <Input input="text" placeholder={placeholder} inputHeight={inputHeight}/>
        </Wrapper>
    )
}


export default HelpFormInput;