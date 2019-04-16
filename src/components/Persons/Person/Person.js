import React,{Component} from 'react';
//  import Person from './Person.css'
class Person extends Component {
render(){
    return (
        <div className="Person">
            <h4 onClick={this.props.click}>My name is {this.props.name} and I am  {this.props.age} years old !</h4>
            <p >{this.props.children}</p>
            <input type="text" value={this.props.name} onChange={this.props.chnaged} />
        </div>
    );
        } 
};
export default Person;
