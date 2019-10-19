import React from 'react';
import './centerBox.style.css';

const CenteredBox = (props) => 
    <div className="container">
        {props.children}
    </div>


export default CenteredBox;