import React from 'react'
import Auth from '../components/Auth'
import CreatePoll from '../components/CreatePoll'
import ErrorMessage from '../components/ErrorMessage'
import Poll from '../components/Poll'
import Polls from '../components/Polls'
import AuthPage from './AuthPage'

function TestPage(){

    return (
    <div>
        <h1>Ui test Page</h1>
        <h2>Test Poll Page</h2>
        <Poll/>
        <h2>Test Polls </h2>
        <Polls/>
        <h2>Test Auth</h2>
        <AuthPage/>
        <h2>Test Create Poll</h2>
        <CreatePoll/>
        <h2>Test Error</h2>
        <ErrorMessage/>
        </div>
    )
}




export default TestPage