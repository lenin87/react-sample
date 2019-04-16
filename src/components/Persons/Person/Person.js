import React from 'react';
import Person from './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <h4 onClick={props.click}>My name is {props.name} and I am  {props.age} years old !</h4>
            <p >{props.children}</p>
            <input type="text" value={props.name} onChange={props.chnaged} />
        </div>
    )
};


export default person;