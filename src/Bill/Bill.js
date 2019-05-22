import React from 'react';
import  './Bill.css';

const Bill = (props) => (
    
    <li>
        #ID: {props.id}<br/>
        Type :  {props.type}<br/>  
        Price :  {props.price}
    </li>
);

export default Bill;