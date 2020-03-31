import React from 'react'
import Item from '../components/Item'
import styled from 'styled-components'
import {connect} from 'react-redux'
import Heading from '../components/Heading'
import ItemsGrid from '../components/ItemsGrid'

const TeamsGrid = styled(ItemsGrid)`
    grid-template-rows: 0.1fr 300px;
`;
const TeamsView = ({teams}) =>(
    <TeamsGrid>                
        <Heading />
        
        {teams.map(({team,admin,img}) => (<Item
            id={admin}
            team ={team}
            img={img}
            type='teamicon'
            key={team}
        />))}
        
    </TeamsGrid>
);

const mapStateToProps =({teams}) => ({teams});
export default connect(mapStateToProps)(TeamsView);