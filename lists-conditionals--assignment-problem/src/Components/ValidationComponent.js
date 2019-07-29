import React from 'react';

const ValidationComponent = (props) => {
    const LIMIT = 5;
    
    return (
        <div>
        {
            props.currentNumber < LIMIT ?
            <p> TEXT IS TOO SHORT</p> :
            <p> TEXT IS LONG ENOUGH</p>
        }
        </div> 
    );
} 

export default ValidationComponent