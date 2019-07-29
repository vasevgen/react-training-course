import React from 'react';
import './UserInput.css'

const style = {
    width:'100%'
} 

const userInput = (props) => {
    return (
    <div className='UserInput'>
        <span>UserName:</span>
        <input style={style} type="text" onChange={props.changed} value={props.userName} />
    </div>  
    );  
};

export default userInput