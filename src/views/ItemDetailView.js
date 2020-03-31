import React from 'react';
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {useLocation, useHistory} from 'react-router-dom'
import Header from "../components/Header"
import Account from '../components/Account';
import Btn from '../components/Button';

const Wrapper = styled.div`
    overflow-x:hidden;
    display:grid;
    grid-template-columns: auto;
    grid-template-rows:1.5fr 4fr 1fr;
`;

const Heading = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-left:10%;
    p{
        margin-top:0;
        font-size:2rem;
    }
`;


const Content = styled.p`
    width: 80%;
    height: 100%;
    word-wrap: break-word;
    text-align:justify;
    margin:0 15% 0 10%;
    display:flex;
    white-space: initial;
    align-items:center;
    font-size: 2rem;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
`;

const Buttons = styled.div`
    margin-top:1%;
    display:flex;
    margin-left:10%;
`;

const Button = styled(Btn)`
    width: 10%;
    height:50%;
`;

const ItemDetailView = ({teams})=>{
    const location = useLocation();
    const history = useHistory();
    let id = parseInt(location.pathname.slice(-1));
    const data = teams.map(({items})=> items.filter((item) => item.id === id).find(item => item.lenght !== 0)).filter(item => item !== undefined)[0];
    console.log(!!data);
    return(
    data ? (<Wrapper>
        <Heading>
            <Header size={7}>{data.title}</Header>
            <p>{data.author}{data.id}</p>
            <Account/>
        </Heading>
        <Content>
        {data.content}
        </Content>
        <Buttons>
            <Button margin onClick={() =>history.go(-1)} >Go back</Button>
        </Buttons>
    </Wrapper>) : (<Redirect to="/404" />)
    
    )
};

const mapStateToProps =({teams}) => ({teams});
export default connect(mapStateToProps)(ItemDetailView);

