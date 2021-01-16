import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getPolls,getCurrentPoll, setCurrentPoll, getUserPolls} from '../store/actions/polls'
import {Button,ListGroup} from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom';
import '../auth.css'
function Polls(props){
    const {isAuthenticated,user}=useSelector(state=>state.auth)
    const polls=useSelector(state=>state.polls)
  //  const currentPoll=useSelector(state=>state.currentPoll)
    const dispatch=useDispatch();
    const path="/poll/" 
    const colors=["primary",
        "secondary",
        "success",
        "danger",
        "warning",
       "info",
        "light",
        "dark"]


    useEffect(()=>{
       
        dispatch(getPolls())
        
        
    },[])
  function  handlSelect(id) {
       const{history}=props;

       history.push(`/poll/${id}`)
   
       
    }
    
    const color=()=>{
        return ('#'+Math.random().toString(16).slice(2,8))
      }

    return (<Fragment>
        {isAuthenticated&&(
            <div>
                <button className='control' style={{margin:'20px'}}  onClick={()=>dispatch(getPolls())}>All polls</button>
                <button className='control' style={{margin:'20px'}} onClick={()=>dispatch(getUserPolls())}> My polls</button>
            </div>

        )}

<main>
<ul class="tilesWrap">
        {
            polls.map((poll)=>{

               return <li 
               
               style={
                   { "&::before":
                    {
                        content: `''`,
                background:color(),
                background: `-webkit-linear-gradient(to right, ${color()}, #C9FFBF)`,
                background: `linear-gradient(to right, ${color()},${color()})`
            }
        }
    }
               
             ><h3>{poll.question}</h3>  
               <button   onClick={()=>handlSelect(poll._id)}>Answer Poll</button>
              </li>
            
            })

        }
</ul>

    </main>
    </Fragment>)
}

export default Polls


{/* <ul class="tilesWrap">
	<li>
		<h2>01</h2>
		<h3>Title 1</h3>
		<p>
			Lorem Ipsum is simply dummy text of the printing and typesetting   
			industry. Lorem Ipsum has been the industry's standard dummy text ever 
			since the 1500s.
		</p>
		<button>Read more</button>
	</li>
	<li>
		<h2>02</h2>
		<h3>Title 2</h3>
		<p>
			When an unknown printer took a galley of type and scrambled it to make 
			a type specimen book. It has survived not only five centuries.
		</p>
		<button>Read more</button>
	</li>
	<li>
		<h2>03</h2>
		<h3>Title 3</h3>
		<p>
			But also the leap into electronic typesetting, remaining essentially 
			unchanged. It was popularised in the 1960s.
		</p>
		<button>Read more</button>
	</li>
	<li>
		<h2>04</h2>
		<h3>Title 4</h3>
		<p>
			With the release of Letraset sheets containing Lorem Ipsum passages,  
			and more recently with desktop publishing software like Aldus PageMaker 
			including versions of Lorem Ipsum.
		</p>
		<button>Read more</button>
	</li>
</ul> */}