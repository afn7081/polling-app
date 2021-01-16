import React,{Fragment, useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider, useDispatch} from 'react-redux'
import api from '../services/api'
import {store} from '../store'
import { addError, getCurrentPoll } from '../store/actions'
import { setCurrentUser,setToken } from '../store/actions'
import decode from 'jwt-decode'
import Auth from '../components/Auth'
import ErrorMessage from '../components/ErrorMessage'
import RouteViews from './RouteViews'
import NavBar from './NavBar'
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import { useEffect } from 'react'
//const dispatch=useDispatch();
if(localStorage.getItem("jwtToken")){
  console.log("token "+localStorage.getItem("jwtToken"))

  setToken(localStorage.getItem("jwtToken"))
  try {
      console.log(Object(decode(localStorage.getItem("jwtToken"))).length)
  store.dispatch(setCurrentUser(decode(localStorage.getItem("jwtToken"))))
   
    


  } catch (err) {
      store.dispatch(setCurrentUser({}))
      store.dispatch(addError(err))
  }

}


function App() {
 


  return (<div  >
    <Provider store={store}>
          <Router>
          <NavBar/>
         <ErrorMessage/>
    <RouteViews  />
  </Router>

  </Provider>
  </div>
  );
}

export default App;
