import React from 'react'
import styled,{css} from 'styled-components'
import Header from '../components/Header'
import Account from '../components/Account'
import Btn from '../components/Button'
const Wrapper = styled.div`
    display:grid;
    grid-template-rows: 1.5fr 5fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 1180px){
        grid-template-columns: 1fr;
        grid-template-rows: 0.5fr 2fr 2fr 2fr 1fr;
   }
`;
const Heading = styled.div`
    grid-column:1/4;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    @media (max-width: 1180px){
        grid-column:1/2;
   }
`;
const CardWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    @media (max-width: 1180px){
        grid-column:1/2;
   }
`;
const Card = styled.div`
    width:60%;
    height:80%;
    border: 2px solid darkorange;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    @media (max-width: 1500px){
        width:70%;
   }
   @media (max-width: 1180px){
    width:40%;
    height:80%;
    margin-top: 100px;
   }
    @media (max-width: 600px){
    width:60%;
    height:80%;
    margin-top: 100px;
   }

    p{
        margin:1%;
        font-weight:700;
        opacity:0.9;
    }
    h1{
        margin: 5% 0 10% 0;

        span{
            font-size:2rem;
            font-weight:400;
            opacity:0.9;
        }
    }

    ${({primary}) =>(
        primary && css`
            transform: scale(1.1);
            border-color:black;
            background-color:darkorange;
        `
    )}
`;

const Button = styled(Btn)`
    margin-top:20%;
    width: 50%;
    height: 10%;
    @media (max-width: 1180px){
        width:40%;
        height:60px;
        margin-bottom: 30px;
   }
    
`;

const SubscritpionView =()=> (
    <Wrapper>
        <Heading>
            <Header size={7}>Subscription</Header>
            <Account/>
        </Heading>
        <CardWrapper>
            <Card>
                <Header size={5}>Junior</Header>
                <h1>4.99$<span>/month</span></h1>
                <p>3 Teams</p>
                <p>Additional Functions</p>
                <p>Standard Support</p>
                <Button>Buy Now</Button>
            </Card>
        </CardWrapper>
        <CardWrapper>
            <Card primary>
            <Header size={5}>Senior</Header>
                <h1>9.99$<span>/month</span></h1>
                <p>Unlimited Teams</p>
                <p>Extra Functions</p>
                <p>High level Support</p>
                <Button>Buy Now</Button>
            </Card>
        </CardWrapper>
        <CardWrapper>
            <Card >
            <Header size={5}>Regular</Header>
                <h1>7.99$<span>/month</span></h1>
                <p>9 Teams</p>
                <p>Additional + Own Functions</p>
                <p>Medium level Support</p>
                <Button>Buy Now</Button>
            </Card>
        </CardWrapper>

    </Wrapper>
);

export default SubscritpionView;