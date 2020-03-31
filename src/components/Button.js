import styled,{css} from 'styled-components';

const Button = styled.button`
    width: 45%;
    height: 20%;
    min-width: 50px;
    font-size: 1.6rem;
    font-weight:700;
    color:black;
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 2px solid black;
    background-color: white;
    -webkit-box-shadow: 0px 0px 4px 0.5px  rgba(0,0,0,0.52);
    -moz-box-shadow: 0px 0px 4px 0.5px  rgba(0,0,0,0.52);
    box-shadow: 0px 0px 4px 0.5px  rgba(0,0,0,0.52);
    
    &:hover{
        cursor:pointer;
    }

    ${({type}) => (
        type === 'teamicon' && css`
            height:40%;
        `
    )}
    ${({margin}) => (
            margin && css`
            margin-right:3%;
        `
    )}

    ${({min}) => (
            min && css`
            margin-left:0;
            margin-right:3%;
            width: 20%;
            height: 4vh;
        `
    )}
`;

export default Button;