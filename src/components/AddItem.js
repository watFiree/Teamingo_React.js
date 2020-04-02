import React, { Component } from 'react';
import styled,{css} from 'styled-components';
import {connect } from 'react-redux'
import h1 from '../components/Header'
import Btn from './Button';
import {addItem} from '../actions/index'

const Wrapper = styled.div`
    width:60vw;
    height:80vh;
    border: 2px solid darkorange;
    position:absolute;
    background-color:white;
    z-index:99999;
    position: absolute;
    display:flex;
    align-items:center;
    flex-direction:column;
    top: 50%;
    right: 50%;
    
    transform: translate(50%, -50%);
    @media (max-width: 1200px){
        width:75vw;
        height:85vh;
    }
    @media (max-width: 600px){
        width:85vw;
    }
    p{
        margin:0;
        font-weight:700;
        color:red;
    }
`;
const Header = styled(h1)`
    margin-top:5%;
`;
const Button = styled(Btn)`
    width:15%;
    height:10%;
    margin-bottom:5%;
    position: relative;
    span{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }

    ${({valid}) => (
            valid === false && css`
            border-color: #4CBB17;
            color:#4CBB17;
        `
    )}
`;

const CloseBtn = styled.button`
    position:absolute;
    top:10px;
    right:10px;
    width:25px;
    height:25px;
    border:2px solid black;
    background-color:white;
    &:hover{
        cursor: pointer;
    }
    &:before, &:after {
        position: absolute;
        content: ' ';
        top:1.5px;
        left:9.5px;
        height: 90%;
        width: 2px;
        background-color: black;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;
const Form = styled.div`
    width: 60%;
    height:90%;
    margin:0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    @media (max-width: 1200px){
        width:100%;
    }

    input{
        border:none;
        border-bottom: 3px solid darkorange;
        margin-bottom: 10%;
        width:50%;
        font-size:2rem;
        transition: all 0.3s ease;
        &::placeholder{
            transition: all 0.4s linear;
        }
        &:hover{
            cursor: pointer;
        }
        &:focus{
            cursor:text;
            outline:none;
            border-color:black;
            &::placeholder{
                color:black;
                transform: translateX(200%)
            }
        }
    }

    textarea{
        border: 3px solid darkorange;
        width:60%;
        min-height:30%;
        max-height:50%;
        max-width:60%;
        font-size:2rem;
        transition: all 0.3s ease;
        margin-bottom:5%;
        &::placeholder{
            transition: opacity 0.2s ease;
        }
        &:hover{
            cursor: pointer;
        }
        &:focus{
            cursor:text;
            outline:none;
            border-color:black;
            &::placeholder{
                color:black;
                opacity:0;
            }
        }
    }
`;


class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            content: '',
            button: true
        };
    
         this.handleValidation = this.handleValidation.bind(this);
      }
    handleValidation(e){
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
        console.log(!!this.state.content.length)
        if(this.state.title.length && this.state.author.length && this.state.content.length)this.setState({button:false});
    }
    render()
    {
        const {teams,teamIndex,addItem,closeView} = this.props;
        let id = Math.max(...teams.map( ( { items } ) => items ).flat(Infinity).map(item => item.id))+1 || 0;
        if( id === -Infinity) id = 0;
        return(
                <Wrapper>
                    <Header size={5}>Add New Item</Header>
                    <Form as="form" >
                        <input name='title' type='text' placeholder='Title' autoComplete="off"  required onChange ={this.handleValidation} />
                        <input name='author' type='text' placeholder='Author' autoComplete="off" required onChange ={this.handleValidation}/>
                        <textarea name='content' placeholder='Text' autoComplete="off" required onChange ={this.handleValidation}/>
                        {!this.state.title.length &&<p>Required title</p>}
                        {!this.state.author.length &&<p>Required author</p>}
                        {!this.state.content.length &&<p>Required content</p>}
                    </Form>
                   
                    <Button valid={this.state.button} disabled={this.state.button}onClick={ () => { this.setState({clicked: true});  addItem(teamIndex,{id:id,title:this.state.title, author:this.state.author, content:this.state.content}); return {closeView}}}
                        >Add Item<span onClick={closeView}></span></Button>
                    <CloseBtn onClick={closeView}/>
                </Wrapper>
            )
    }
};

const mapStateToProps = ({teams}) => ({teams});
const mapDispatchToProps = dispatch => ({
    addItem :(teamIndex,itemContent) => dispatch(addItem(teamIndex,itemContent))
}) 
export default connect(mapStateToProps,mapDispatchToProps)(AddItem);
