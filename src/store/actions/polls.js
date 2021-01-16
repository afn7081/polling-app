import api from '../../services/api'
import {SET_CURRENT_POLL,SET_POLLS} from '../actionTypes'
import {addError,removeError} from './error'
//import api from '../../services/api'


export const setPolls=polls=>({

    type:SET_POLLS,
    polls

})

export const setCurrentPoll=poll=>({

    type:SET_CURRENT_POLL,
    poll
})

export const getPolls= ()=>{
    return async dispatch=>{
        try {
            
            const polls=await api.call('get','poll')  
            dispatch(setPolls(polls))
           // dispatch(getPolls())
            dispatch(removeError());

        } catch (err) {
            console.log(err.response)
            const error=err.response.data;

            dispatch(addError(error.err))

        }
    }
}

export const getUserPolls= ()=>{
    return async dispatch=>{
        try {
            
            const polls=await api.call('get','poll/user')  
            dispatch(setPolls(polls))
            dispatch(removeError());

        } catch (err) {
            
            const error=err.response.data;

            dispatch(addError(error.err))

        }
    }
}

export const createPoll= (data)=>{
    return async dispatch=>{
        try {
            
            const poll=await api.call('post','poll',data)  
            dispatch(setCurrentPoll(poll))
            dispatch(removeError());

        } catch (err) {
            
            const error=err.response.data;

            dispatch(addError(error.err))

        }
    }
}


export const getCurrentPoll= (path)=>{
    return async dispatch=>{
        try {
            console.log(path)
            const poll=await api.call('get',`poll/${path}`)  
            console.log(poll)
            dispatch(setCurrentPoll(poll))
            dispatch(removeError());

        } catch (err) {
            console.log(err)
            const error=err.response.data;
                console.log(err.response)
            dispatch(addError(error.err))

        }
    }
}



export const vote= (path,data)=>{
    return async dispatch=>{
        try {
            
            const poll=await api.call('post',`poll/${path}`,data)  
            dispatch(setCurrentPoll(poll))
            dispatch(removeError());

        } catch (err) {
            
            const error=err.response.data;
            console.log(error)
            dispatch(addError(error.err))

        }
    }
}


