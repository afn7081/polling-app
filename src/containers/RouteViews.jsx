import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import AuthPage from '../pages/AuthPage'
import TestPage from '../pages/TestPage'
import HomePage from '../pages/HomePage'
import { getCurrentPoll } from '../store/actions';
import { useHistory } from "react-router-dom";
import PollPage from '../pages/PollPage';
import CreatePollPage from '../pages/CreatePollPage';
function RouteViews(){
const dispatch=useDispatch();
 

console.log("tf happened")
const {isAuthenticated}=useSelector((state)=>{
    console.log("state "+state.error)
    return state.auth
})
    return(<main  >
           
            <Switch>
            <Route exact path='/'render={(props)=><HomePage {...props}/>}/>    
            <Route path='/login' render={()=><AuthPage authType='login' isAuthenticated={isAuthenticated}/>}/>
            <Route path='/register' render={()=><AuthPage authType='register' isAuthenticated={isAuthenticated}/>}/>
            <Route exact path='/poll/new'render={()=><CreatePollPage isAuhenticated={isAuthenticated}/>}/>    
            
            <Route
        exact
        path="/poll/:id"
        render={props => (
          <PollPage getPoll={id => dispatch(getCurrentPoll(id))} isAuthenticated={isAuthenticated} {...props} />
        )}
      />

            <Route path='/test' render={()=><TestPage/>} />
            </Switch>
            
        </main>
    
        )
}

export default RouteViews;