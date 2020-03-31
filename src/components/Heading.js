import React from 'react'
import {useLocation} from 'react-router-dom'
import Header from './Header'
import Account from './Account'
import styled from 'styled-components';

const Wrapper = styled.div`
    grid-column:1/4;
    grid-row: 1/2;
    width:100%;
    height:166px;
    display:flex;
    align-items:center;
    justify-content:center;
    position: relative;
    @media (max-width: 1500px){
        grid-column:1/3;
   }
   @media (max-width: 1000px){
    grid-column:1/2;
   }
`;



const Heading = ()=>{
    let location = useLocation();
    return (
    <Wrapper >
        <Header animate size={7}>{location.pathname.slice(1)}</Header>
        <Account/>
    </Wrapper>
    )
};
export default Heading;