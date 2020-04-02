import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
const Wrapper = styled.div`
    display:flex;
    align-items:center;
    position: absolute;
    font-weight:700;
    top:5px;
    right:5px;
    font-size:2rem;
    img{
        height:50px;
        width:50px;
        border-radius:50%;
        margin-left:15px;
    }

    &:hover{
        cursor: pointer;
    }
`;

const Account = ({username,profilephoto}) => (
    <Wrapper>
        <p>{username}</p>
        <img src={profilephoto} alt={username}/>
    </Wrapper>
);

const mapStateToProps = ({username,profilephoto}) =>({username,profilephoto});
export default connect(mapStateToProps)(Account);