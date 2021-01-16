import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {vote} from '../store/actions/polls' 
import {Pie} from 'react-chartjs-2'
import { Redirect } from 'react-router-dom';
import '../index.css'

  function Poll({isAuthenticated}){
    const currentPoll=useSelector(state=>state.currentPoll)
    const dispatch=useDispatch();

    console.log(currentPoll)
    const handleVote=(id,ans)=>{

        dispatch(vote(id,ans))
    }
if(!isAuthenticated)return <Redirect to='/login'/>
    const color=()=>{
      return ('#'+Math.random().toString(16).slice(2,8))
    }

    const answers=currentPoll.options && currentPoll.options.map(option=>(
        <li onClick={()=>handleVote(currentPoll._id,{answer:option.option})} key={option.id}>{option.option}</li>
    ));

   const data=currentPoll.options&&{
      labels:currentPoll.options.map(option=>option.option),
      datasets:[{
        label:currentPoll.question,
        backgroundColor:currentPoll.options.map(option=>color()),
        borderColor:'#323643',
        data:currentPoll.options.map(option=>option.votes)
      }]
    }
    return(<div>
   
        <h3 style={{textAlign:'center'}} >{currentPoll.question}</h3>
        <div id="pollContainer">
    <div id="pollButtons"><ul>{answers}</ul>
    </div>
       
      <Pie data={data}/>      
        </div></div>)






{/* <article className={`${animate.animated} ${animate.fadeIn} ${animate.faster} ${styles.poll}`} style={{ textAlign: customStyles.align, alignItems: this.alignPoll(customStyles.align) }}>
        <h3 className={styles.question} style={{ borderWidth: customStyles.questionSeparator ? '1px' : '0', alignSelf: customStyles.questionSeparatorWidth === 'question' ? 'center' : 'stretch', fontWeight: customStyles.questionBold ? 'bold' : 'normal', color: customStyles.questionColor }}>{question}</h3>
        <ul className={styles.answers}>
          {answers.map(answer => (
            <li key={answer.option}>
              {!poll.voted ? (
                <button className={`${animate.animated} ${animate.fadeIn} ${animate.faster} ${styles.option} ${styles[customStyles.theme]}`} style={{ color: colors[0], borderColor: colors[1] }} type='button' onClick={() => this.vote(answer.option)}>
                  {answer.option}
                </button>
              ) : (
                <div className={`${animate.animated} ${animate.fadeIn} ${animate.faster} ${styles.result}`} style={{ color: colors[0], borderColor: colors[1] }}>
                  <div className={styles.fill} style={{ width: this.calculatePercent(answer.votes, totalVotes), backgroundColor: colors[2] }} />
                  <div className={styles.labels}>
                    <span className={styles.percent} style={{ color: colors[0] }}>{this.calculatePercent(answer.votes, totalVotes)}</span>
                    <span className={`${styles.answer} ${answer.option === poll.option ? styles.vote : ''}`} style={{ color: colors[0] }}>{answer.option}</span>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <p className={styles.votes}>{`${totalVotes} vote${totalVotes !== 1 ? 's' : ''}`}</p>
      </article>
 */
}







  }

  export default Poll 