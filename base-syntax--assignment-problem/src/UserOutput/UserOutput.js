import React from 'react';
import './UserOutput.css'

const style = {
    padding: '10px'
} 

const userOutput = (props) => {
    return (
    <div style={style} className='UserOutput'>
        <p>{props.userName}</p>
        <p>{props.paragraph}</p>
    </div>
    )
};

export default userOutput