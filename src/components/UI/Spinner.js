import React from 'react'
import spinner from '../../images/spinner.gif';

const Spinner = () => {
    return (
       <img src={spinner} style={{ width:'200px', margin:'auto', display:'black'}}
       alt="Loading..."        
    />
    )
}

export default Spinner
