import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import styled, {css, keyframes} from 'styled-components'
import Button from './Button'
import Header from './Header'

const enter = keyframes`
        from {
        transform: translateY(20%);
        opacity: 0.8;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
`;

const Wrapper = styled.div`
    width: 300px;
    height: 300px;
    padding: 12px;
    border: 2px solid black;
    display:flex;
    align-items:center;
    flex-direction:column;
    animation : ${enter} 0.5s cubic-bezier(.39,-0.44,.41,1.56);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.4);
    background-color: darkorange;
    transition: transform 0.3s ease;

    @media (max-width: 1500px){
        margin-top: 50px;
   }

    img{
        width:50%;
        height:50%;
        margin-bottom:10px;
    }
    &:hover{
        transform:translateY(-3px);
    }

    ${({type}) => (
        type === 'teamicon' && css`
            height:120px;
            margin-bottom:0;
            justify-content: space-around;
        `
    )}
`;



const Info = styled.div`
    margin: 15px 0 15px 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    p{
        margin-top:5px;
    }
`;

const TeamName = styled.div`
    height: 35%;
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    img{
        height:50px;
        width:50px;
        margin: 0 0 0 15px;
        border-radius:50%;
    }
`;

class Item extends Component {

    state ={
        redirect:false
    };

    handleClick= ()=> this.setState({redirect:true});
    

    render() {
        const {team,author,img,type,title,id} = this.props;
        if(this.state.redirect && type !== 'teamicon'){
            return <Redirect to={`home/${id}`} />
        }else if(this.state.redirect && type === 'teamicon'){
            return <Redirect to={`teams/${team}`} />
        }
        return(
            <Wrapper type={type}>
                <TeamName>
                    <Header size={3.5}>{team || "cos"}</Header>
                    <img src={img} alt={team}/>
                </TeamName>
                {type === 'teamicon' ? null : <Info>
                    <Header size={2.5}>{title}</Header>
                    <p>{author}</p>
                </Info>}
                <Button onClick={this.handleClick} type={type}>More</Button>
            </Wrapper>
        )}
};

Item.propTypes = {
    id: PropTypes.number.isRequired,
    author: PropTypes.string,
    team: PropTypes.string.isRequired,
    type: PropTypes.string,
    children: PropTypes.string,
}

export default Item;