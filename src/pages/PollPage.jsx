import React from 'react'
import Poll from '../components/Poll'

function PollPage({match,getPoll,poll,isAuthenticated}){
const host=window.location.href;
//console.log(match)
getPoll(match.params.id)
console.log(getPoll)

    return(<div>
    
        <Poll isAuthenticated={isAuthenticated}/>

    </div>) 

}

export default PollPage