import React from 'react'
import {connect} from 'react-redux'
import Item from '../components/Item'
import Heading from '../components/Heading'
import ItemsGrid from '../components/ItemsGrid'
import PropTypes from 'prop-types'

const HomeView = ({teams}) =>{
    
     return(
    <ItemsGrid>           
        <Heading/>
        {teams.map(({team,img,items})=> items.map(({id,title,author,content}) => <Item
            id={id}
            team ={team}
            author={author}
            img={img}
            type={null}
            title={title}
            key={id}
        >{content}</Item>))}
    </ItemsGrid>)
};

const mapStateToProps =({teams}) => ({teams});
export default connect(mapStateToProps)(HomeView);

Item.propTypes = {
    id: PropTypes.number.isRequired,
    author: PropTypes.string,
    title: PropTypes.string,
    team: PropTypes.string.isRequired,
    content: PropTypes.string,
}

Item.defaultProps = {
    id: 9999,
    author: 'Not found',
    title: "Something went wrong go to home page",
    team: 'Not found',
    content: "Something went wrong go to home page",
}