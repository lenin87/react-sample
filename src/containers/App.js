import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import NameForm from '../components/Persons/Person/NameForm';

class App extends Component {
  state = {
    person: [
      { id: 1, name: "Lenin", age: 31 },
      { id: 2, name: "babu", age: 30 },
      { id: 3, name: "chinni", age: 29 }
    ],
    showPerson: false
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({ person: persons });
  }
  togglePersonHandler = () => {
    if (this.state.person.length > 0) {
      const doesShow = this.state.showPerson;
      this.setState({ showPerson: !doesShow });
    } else {
    }
  }
  cleardata = () => {
    this.setState({ person: '' })
  }

  nameChnagedHandler = (event, id) => {
    const parentIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });
    const persons = {
      ...this.state.person[parentIndex]
    };
    persons.name = event.target.value;
    const person = [...this.state.person]
    person[parentIndex] = persons;
    this.setState({ person: person })


  }
  render() {
    let persons = null;
    if (this.state.showPerson) {
      if (this.state.person.length > 0) {
        persons = (
          <div>
             <Persons   // function based component 
            persons = {this.state.person}
            clicked={this.deletePersonHandler}
            changed ={this.nameChnagedHandler}
            />
            {/* {this.state.person.map((per, index) => { // class based component
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={per.name} age={per.age} key={per.id}
                chnaged={(event) => this.nameChnagedHandler(event, per.id)} />
            })} */}
          </div>
        )
      } else if (this.state.person.length == '') {
        return <h4>NO data found</h4>
      }
    }
    return (
      <div className="App">
      <Cockpit 
      title={this.props.title}
        showPersons ={this.state.showPersons}
        persons={this.state.person}
        clicked ={this.togglePersonHandler}
        clearclick={this.cleardata}
      />
       {persons}
        {/* {JSON.stringify(this.state.person)} */}
        {/* <h5>Hi , I am  App</h5>
        <p>This is real App</p>
        <button onClick={this.togglePersonHandler}>Toggel  Person</button>
        &nbsp;&nbsp;
        <button onClick={this.cleardata}>Clear</button> */}
       
        <br />  <br />
         <NameForm /> 
      </div>
    );
  }
}

export default App