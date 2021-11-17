import React from 'react'
import loading from './aax.gif'
 const spinner =()=> {
    
        return (
            <div className="text-center">
                <img src={loading} alt="error while laoding"/>
            </div>
        )
    
}

export default spinner