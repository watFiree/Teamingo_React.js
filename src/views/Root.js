import React from 'react';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import {Provider} from 'react-redux';
import styled from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle'
import Sidebar from '../components/Sidebar'
import HomeView from './HomeView'
import ItemDetailView from './ItemDetailView'
import TeamDetailView from './TeamDetailView'
import TeamsView from './TeamsView'
import SubscriptionView from './SubscriptionView'
import NotFoundView from './NotFoundView'
import AppContext from '../context'
import store from '../store/index'

const Wrapper = styled.div`
    margin:0;
    height:100vh;
    width:99vw;
    display: grid;
    grid-template-columns: 1fr 5fr; 
    grid-auto-flow: row;
    @media (max-width: 1150px){
        width:98vw;
    }
    @media (max-width: 1250px){
        width:100%;
        grid-template-columns:auto;
        grid-template-rows:200px auto;
    }
`;

const Root = ()=> (
    <Provider store={store}>
        <BrowserRouter>
            <GlobalStyle/>
            <AppContext.Provider>
                <Wrapper>
                    <Sidebar/>
                       <Switch>
                            <Redirect exact from="/" to="/home" />
                            <Route exact path='/404' component={NotFoundView} />
                            <Route exact path="/home" component={HomeView} />
                            <Route exact path="/teams" component={TeamsView} />
                            <Route path="/subscription" component={SubscriptionView} />
                            <Route path="/home/:id" component={ItemDetailView} />
                            <Route path="/teams/:team" component={TeamDetailView} />
                         </Switch>
                     </Wrapper>
            </AppContext.Provider>    
        </BrowserRouter>
    </Provider>
);

export default Root;