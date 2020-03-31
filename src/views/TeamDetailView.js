import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from '../components/Header'
import Account from '../components/Account';
import styled from 'styled-components';
import Btn from '../components/Button'
import AddItem from '../components/AddItem';
import {removeItem} from '../actions/index'

const Wrapper = styled.div`
    display:grid;
    grid-template-rows: 1fr 4.5fr 0.5fr;
    grid-template-columns:1fr 1fr;
    position:relative;
    @media (max-width: 1500px){
        grid-template-columns:auto;
        grid-template-rows: 1fr 2.5fr 2.5fr 1fr;
    }
`;
const Heading =styled.div`
    grid-column: 1/3;
    display:flex;
    align-items:center;
    justify-content:center;
    @media (max-width: 1500px){
        grid-column: 1/2;
    }
`;
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Button = styled(Btn)`
    width:20%;
    height:70%;
`;

const ButtonS = styled(Btn)`
    margin-right:3%;
    width:80px;
    height:40px;
`;
const Menu = styled.div`
    display:flex;
    margin-left:10%; 

    @media (max-width: 1500px){
        justify-content: center;
        margin-left:0;
        margin-top: 50px;
    }
`;

const Buttons = styled.div`
    display:flex;
    margin-right:3%;
`;
const Item = styled.div`
    width:475px;
    height:70px;
    border: 2px solid darkorange;
    font-size:20px;
    margin-bottom:2px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-weight:700;
    p{
        margin-left: 3%;
    }
    @media (max-width: 700px){
        width: 300px;
    }
`;

const Member = styled.div`
    width:475px;
    min-height:70px;
    border: 2px solid black;
    background-color:darkorange;
    font-size:20px;
    margin-bottom:2px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    font-weight:700;
    img{
        height:50px;
        width:50px;
    }
    @media (max-width: 700px){
        width: 300px;
    }
`;

class TeamDetailView extends Component{

state = {
    itemView:false
}

openItemBox= ()=> this.setState({itemView:true});
closeItemBox= ()=> this.setState({itemView:false});

render(){
    const {teams,match,removeFunction} = this.props;
    const teamname = match.params.team.toUpperCase();
    const teamIndex = teams.map((item,index) => item.team.toUpperCase() === teamname ? index : null).find(item => item !== null);
    return(
        <Wrapper>
            <Heading>
                <Header size={7}>{match.params.team}</Header>
                <Account/>
            </Heading>
            <Container>
                { teamIndex!== undefined && teams[teamIndex].items.map(({id,title}) => 
                <Item key={id}>
                    <p>{title}</p>
                    <Buttons>
                        <ButtonS as={Link} to={`/home/${id}`}>More</ButtonS>
                        <ButtonS as={Link} to={match.url} onClick={ ()=> removeFunction(id,teamIndex)}>Remove</ButtonS>
                    </Buttons>
               </Item> ) }
            </Container>
            <Container>
                <Member>nickname<img src='https://www.bleepingcomputer.com/forums/uploads/profile/photo-thumb-1122063.jpg?_r=1556375529' alt='nickname'/></Member>
                <Member>nickname<img src='https://www.bleepingcomputer.com/forums/uploads/profile/photo-thumb-1122063.jpg?_r=1556375529' alt='nickname'/></Member>
                <Member>nickname<img src='https://www.bleepingcomputer.com/forums/uploads/profile/photo-thumb-1122063.jpg?_r=1556375529' alt='nickname'/></Member>
                <Member>nickname<img src='https://www.bleepingcomputer.com/forums/uploads/profile/photo-thumb-1122063.jpg?_r=1556375529' alt='nickname'/></Member>
                <Member>nickname<img src='https://www.bleepingcomputer.com/forums/uploads/profile/photo-thumb-1122063.jpg?_r=1556375529' alt='nickname'/></Member>
            </Container>
            <Menu>
                <Button margin as={Link} to="/teams">Go back</Button>
                <Button onClick={this.openItemBox} >Add Item </Button>
            </Menu>
            {this.state.itemView && <AddItem teamIndex={teamIndex} closeView={this.closeItemBox}/>}
        </Wrapper>    
    )
}
};

const mapStateToProps =({teams}) => ({teams});

const mapDispatchToProps = dispatch => ({
    removeFunction :( id,teamIndex) => dispatch(removeItem(id,teamIndex))
})

export default connect(mapStateToProps,mapDispatchToProps)(TeamDetailView);
