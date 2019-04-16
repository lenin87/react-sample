import React from 'react';

const cockpit = (props) =>{
    return(
        <div>
        <h3>{props.title}</h3>
        <p>This is real App</p>
        <button onClick={props.clicked}>Toggel  Person</button>
        &nbsp;&nbsp;
        <button onClick={props.clearclick}>Clear</button>
        </div>
    )};

    export default cockpit