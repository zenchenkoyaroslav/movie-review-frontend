import React from 'react';

const Alert = ({error}) => {

    let errorMessage;

    if (error.response) {
        errorMessage = error.response.data.message;
    } else if (error.request) {
        errorMessage = error.request;
    } else {
        errorMessage = error.message;
    }

    if (!errorMessage){
        return (<div></div>)       
    }
    console.log(errorMessage)
    return (
        
        <div class="alert alert-danger" role="alert">{errorMessage}</div>
    )
}

export default Alert