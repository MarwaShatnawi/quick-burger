import React from 'react';
import './Menu.css';

const Menu = (props) => (
    <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
        <img src="https://sifu.unileversolutions.com/image/en-AU/recipe-topvisual/2/1260-709/beef-burger-with-deep-fried-bacon-and-thousand-island-dressing-50247463.jpg" />
      <div className="caption">
        <h3>#ID: {props.id}</h3>
        <p>
            Type: {props.type}
            <br />
            Price: {props.price}
        </p>
        <p>
            <button onClick={()=> props.delEvent(props.id)} className="btn btn-primary" role="button">Select</button>    
        </p>
      </div>
    </div>
  </div>
    

);

export default Menu;