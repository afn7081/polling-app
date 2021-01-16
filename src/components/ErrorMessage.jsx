  
import React, { Fragment } from 'react';
import { connect, useSelector } from 'react-redux';
import '../auth.css'

const ErrorMessage = () => {

const error=useSelector(state=>state.error)

console.log(error)
  return (<Fragment >
    {error&& <div className={error.message?'isa_error':''}>{error.message}</div>}
  </Fragment>
)};

export default (ErrorMessage);