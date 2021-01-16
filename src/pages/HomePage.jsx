import React from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Polls from '../components/Polls'

function HomePage(props){

    return(<div>
    
        <Polls {...props}/>

    </div>)

}

export default HomePage