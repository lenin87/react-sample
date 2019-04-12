import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person';

class App extends Component {
  state = {
    person : [
      { id: 1, name : "Lenin" , age:31},
      {  id:2, name : "babu", age:30},
      { id:3 , name: "chinni",age:29}
    ],
    showPerson : false
  }
  // SwitchHandler = (newnam e,newage) =>{
  //     console.log("Was Clicked");
  //     this.setState({
  //       person : [
  //         {name : newname , age:newage},
  //         {name : "babu lenin", age:30},
  //         {name: "chinni k",age:29}
  //       ]
  //     })
  // }
  deletePersonHandler =(personIndex) =>{
    console.log("====");
    //const persons = this.state.person;
    const persons = [...this.state.person];
    persons.splice(personIndex,1);
    this.setState({person:persons});

  }
  togglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow});
}
  nameChnagedHandler = (event,id)=>{
    const parentIndex = this.state.person.findIndex(p =>{
     return p.id=== id;
    });

    const persons ={
      ...this.state.person[parentIndex]
    };
 persons.name=event.target.value;
 const person = [...this.state.person]
 person[parentIndex] = persons;
 this.setState({person:person})


  }
  render() {
    let persons = null;
    if (this.state.showPerson ){
      persons = (
        <div>
          {this.state.person.map((per,index) => {
            return <Person
            click ={() => this.deletePersonHandler(index)}
            name={per.name} age={per.age}  key={per.id}
            chnaged = {(event)=>this.nameChnagedHandler(event,per.id)}/>
          })}
          
        {/* <Person  
        name ={this.state.person[0].name}
         age={this.state.person[0].age} />
        <Person
         name={this.state.person[1].name} 
         age={this.state.person[1].age} 
         click={this.SwitchHandler.bind(this,'komatipalli',45)}
         chnaged = {this.nameChnagedHandler}>
         MY Hobbies are watching cricket </Person>
        <Person
         name= {this.state.person[2].name} 
          age={this.state.person[2].age}/>  */}
          </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi , I am React App</h1>
        <p>This is real App</p>
        {/* <button onClick={this.SwitchHandler.bind(this,'Durga rani')}>Switch name</button> */}
        <button onClick={this.togglePersonHandler}>Toggel  Person</button>
        {persons}
        {/* {
          this.state.showPerson == true ? 
        <div>
        <Person  
        name ={this.state.person[0].name}
         age={this.state.person[0].age} />
        <Person
         name={this.state.person[1].name} 
         age={this.state.person[1].age} 
         click={this.SwitchHandler.bind(this,'komatipalli',45)}
         chnaged = {this.nameChnagedHandler}>
         MY Hobbies are watching cricket </Person>
        <Person
         name= {this.state.person[2].name} 
          age={this.state.person[2].age}/> 
          </div> : null
        } */}
      </div>
    );
  }
}

export default App

