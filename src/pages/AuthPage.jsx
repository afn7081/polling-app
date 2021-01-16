import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Auth from '../components/Auth'
import ErrorMessage from '../components/ErrorMessage'


function AuthPage({authType,isAuthenticated}){


    console.log('authenticated: '+isAuthenticated)

    if(isAuthenticated)return <Redirect to='/'/>

    return (<div>
      
        <Auth authType={authType}/>

    </div>)

}

export default AuthPage