import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
    overflow:hidden;
    background-color: darkorange;
    width: 100%;
    height:100%;
    display:flex;
    position:sticky;
    top:0;
    flex-direction: column;
    align-items: center;
    
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.4);
    @media (max-width: 1250px){
        height:200px;
        z-index:9999;
        justify-content: space-between;
    }
`;

const Nav = styled.div`
margin-top: 150px;
width:100%;
@media (max-width: 1250px){
    margin:0;
    width:100%;
    display:flex;
    justify-content:space-around;
}

`;

const Option = styled.div`
    width: 100%;
    height: 70px;
    font-size:2rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    display:flex;
    justify-content:center;
    align-items: center;
    position: relative;
    &::before{
        content:"";
        position:absolute;
        width:100%;
        height:100%;
        background:white;
        z-index:-1;
        transform: translateX(10px);
        opacity:0;
        transition: opacity 0.3s ease , transform  0.4s ease;
    }
    &:hover::before{
        opacity:1;
        transform: translateX(0);
        
    }
    &:hover{
        cursor: pointer;
    }
    a{
        display:block;
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items: center;
        color:black;
        text-decoration:none;
    }
    @media (max-width: 1250px){
        width:calc(100%/3);
        &::before{
            content:"";
            position:absolute;
            width:100%;
            height:100%;
            background:white;
            z-index:-1;
            transform: translateY(10px);
            opacity:0;
            transition: opacity 0.3s ease , transform  0.4s ease;
        }
        &:hover::before{
            opacity:1;
            transform: translateY(0);
        }

    }
    @media (max-width: 600px){
        font-size:1.5rem;
    }   
`;

const Heading = styled(Header)`
    margin-top:80px;
    @media (max-width: 1250px){
        margin-top:50px;
    }
`;

const Sidebar = ()=> (
    <Wrapper>
        <Heading size={4}>teamingo</Heading>
        <Nav>
            <Option><Link to="/home">Home</Link></Option>
            <Option><Link to="/teams">Teams</Link></Option>
            <Option><Link to="/subscription">Subscription</Link></Option>
        </Nav>
    </Wrapper>
);

export default Sidebar;