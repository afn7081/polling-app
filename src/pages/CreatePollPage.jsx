import React from 'react'
import { useSelector } from 'react-redux'
import {Redirect} from 'react-router-dom'
import CreatePoll from '../components/CreatePoll'
function CreatePollPage({isAuhenticated}){


if(!isAuhenticated)return(<Redirect to='/login'/>)
    else
    return(<div>
        <CreatePoll isAuhenticated={isAuhenticated}/>
        
    </div>)

}

export default CreatePollPage