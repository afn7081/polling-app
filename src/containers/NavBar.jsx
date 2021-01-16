import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from '../store/actions';
import Navbar from 'react-bootstrap/Navbar'
import {NavDropdown} from 'react-bootstrap'

import Nav from 'react-bootstrap/Nav'

import '../auth.css'

export default function NavBar()
{


     const {isAuthenticated,user}=useSelector(state=>state.auth)
     const dispatch=useDispatch();
     const handleLogout=()=>{

         dispatch(logout())
     }
  return  (<Fragment className="nav" >
 <Navbar variant='dark' bg='dark' style={{  background: "#C9FFBF",
    background: "-webkit-linear-gradient(to right, #581845, #272a2b)",
    background: "linear-gradient(to right, #262c4b, #581845)"}}  expand="lg" >
  <Navbar.Brand >Δημοσκοπήσειςcd</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Nav className="mr-auto">

      <Nav.Link href="/">Home</Nav.Link>
      {isAuthenticated&&<Nav.Link href='/poll/new'>New Poll</Nav.Link>}
     {!isAuthenticated&&<Nav.Link href="/login">Login</Nav.Link>
      }

      {!isAuthenticated&&<Nav.Link href="/register">Register</Nav.Link>}
      
      
 
    </Nav>
    {isAuthenticated&&<NavDropdown title={user.username} id="basic-nav-dropdown">
      <NavDropdown.Item href="/">Polls</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>handleLogout()} >Logout</NavDropdown.Item>
        
     
      </NavDropdown>
    }
</Navbar>
</Fragment>);



}

