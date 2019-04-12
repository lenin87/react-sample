import React from 'react';
import Person from './Person.css'

const person = (props) =>{
    //return <h4>This is comming from function {Math.floor(Math.random() * 30)}</h4>
    return (
        <div className="Person">
         
    <h4 onClick={props.click}>My name is {props.name} and I am  {props.age} years old !</h4>
   <p >{props.children}</p>
   <input type="text" value={props.name} onChange={props.chnaged} />
    </div>
    )
};

const student = () =>{
    return <h5>Student age is   {Math.random * 30}</h5>
}

export default person;
