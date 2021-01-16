import React, { useState,Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {createPoll} from '../store/actions'

function CreatePoll({isAuhenticated}){

    const [{question,options},setNewPoll]=useState({question:'',options:['']})
    const dispatch=useDispatch()
    console.log("THE FUCK "+isAuhenticated)

   const handleChange=(e)=>{
    const name=e.target.name;
    console.log(name)
    const value=e.target.value
    console.log(value)
    setNewPoll((currentPoll)=>{


        return {question:value,options:options}
    })

   }

   const handleAnswer=(e,i)=>{
    const newOption=e.target.value;
    
    const newOptions=[...options];
    newOptions[i]=newOption

    setNewPoll((currentPoll)=>{

        return {...currentPoll,options:newOptions}
    })

   }



   const addAnswer=()=>{
    setNewPoll((currentPoll)=>{


        return {...currentPoll,options:[...currentPoll.options,'']}
    })

   }

   const formattedOptions=options.map((option,i)=>{

    return (<Fragment>
      
        <input className="form-input" style={{width:'300px'}} placeholder={"option "+(i+1).toString()} type="text" value={option} key={i} onChange={(e)=>handleAnswer(e,i)} required/>
        
    </Fragment>)
   })

if(!isAuhenticated)return(<Redirect to='/login'/>)
    else{
    return(
        <div class="overlay">

    <form onSubmit={()=>dispatch(createPoll({question,options}))}>
    <div className="con">
    <header className="head-form">
      <h2>Add Poll</h2>
      <p style={{color:'#6b778d'}}>Enter your question followed by options</p>
   </header>
   <div className="field-set">
     
      
        <input placeholder="question" className="form-input" type="text" name='question' style={{width:'300px'}} value={question} onChange={handleChange} required/>
        <br/>
        {formattedOptions}
        <br/><br/>
        <button className="log-in" type='button' onClick={addAnswer}>Add Option</button>
        <br/><br/>
         <button  className="log-in" type='submit' >Submit</button>
           </div>
</div>
    </form>
    </div>)
    }
}

export default CreatePoll