import React,{Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {authUser} from '../store/actions'
import {Form,Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom' 
import '../auth.css'

function Auth({isAuthenticated,authType}) {

    const [{username,password},updatedata]=useState({username:'',password:''});
    
    const dispatch=useDispatch();

   function handleChange(event){
            //console.log(event)
                const { value, name } = event.target;
        updatedata((data)=>{
            console.log("the data  ="+data)
            if(name==='username'){
                return {username:value,password:data.password}
            }

            else{
                return{username:data.username,password:value}
            }
        })

    }


   function handleSubmit(event){

    event.preventDefault();
    dispatch(authUser(authType,{username,password}))
    console.log(username+" "+password)
    }

    const formStyle={
        width:'500px',
         display:'flex',
         justifyContent:'center',
          alignItems:'center',
          margiTop:'80px',
          backgroundColor: '#1b262c'
          
      }

if(isAuthenticated)return <Redirect to='/'/>
  return (

<div class="overlay">

<form onSubmit={handleSubmit}>
   <div className="con">
   <header className="head-form">
      <h2 style={{textTransform:'capitalize'}}>{authType}</h2>
      <p style={{textTransform:'capitalize'}} style={{color:'#6b778d'}}>{authType} here using username and password</p>
   </header>
   <br/>
   <div className="field-set">
     
      
      
         <input onChange={handleChange} value={username} name='username' className="form-input" id="txt-input" type="text" placeholder="@UserName" required/>
     
      <br/>
     
      <input onChange={handleChange} className="form-input" name='password' type="password" placeholder="Password" id="pwd"  value={password} required/>
 
     
     
      <br/>
      <br/><br/><br/>
      <button style={{textTransform:'capitalize'}} className="log-in" type='submit'> {authType} </button>
   </div>
  </div>
  
</form>
</div>
        
  );

  
//   <Form>
//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Form.Group controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>
}

export default Auth;
