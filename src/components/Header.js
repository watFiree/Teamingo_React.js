import styled from 'styled-components'


const Header = styled.h1`
    font-size: ${ ( { size } ) => `${size}rem` || "4rem"};
    font-weight:700;
    letter-spacing:1px;
    margin:0;
    
    &::first-letter{
        text-transform:uppercase;
    }
    @media (max-width: 600px){
      font-size:4rem;
    }
`;

export default Header;