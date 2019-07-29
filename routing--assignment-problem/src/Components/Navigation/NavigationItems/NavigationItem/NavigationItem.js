import React from 'react';
import {NavLink} from 'react-router-dom';

const navigationItem = (props) => {
 
const style = {
    'listStyle': 'none'
}

return (
        <li style={style}>
            <NavLink  exact={props.exact} to={props.link}>{props.children}</NavLink>
        </li>
    );
}

export default navigationItem;