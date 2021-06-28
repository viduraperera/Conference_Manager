import React from 'react'

function ToastMessage({message, status}) {
    return (
        <div className="container">
            {status? (
                <div className="alert alert-success" role="alert">
                 {message}
            </div>
            ): 
            <div className="alert alert-danger" role="alert">
                 {message}
            </div>
            }
            
        </div>
    )
}

export default ToastMessage
