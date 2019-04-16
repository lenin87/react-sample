import React from 'react';
import ReactDOM from 'react-dom';
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            age: '',
            person: {
                mobile: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(key) {
        return function (e) {
            if (key == 'mobile') {
                var state = {
                    person: {}
                };
                state.person[key] = e.target.value;
            } else {
                var state = {
                };
                state[key] = e.target.value;
            }

            this.setState(state);
        }.bind(this);

    }
    handleSubmit(event) {
        var data = {
            name: this.state.name,
            age: this.state.age,
            message: this.state.message,
            mobile: this.state.person.mobile
        }
        alert('Hello ' + data.name + ', your message is: ' + data.message + '-' + data.mobile);
    
        /* POST DATAS TO PHP HERE...
          var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", "form/form-submit.php", true);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");                  
             xmlhttp.send(data);
        */

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" value={this.state.name} onChange={this.handleChange('name')} />
                </label>
                <br />
                <label>
                    Age:
            <input type="text" value={this.state.age} onChange={this.handleChange('age')} />
                </label>
                <br />
                <label>
                    Message:
            <input type="text" value={this.state.message} onChange={this.handleChange('message')} />
                </label>
                <br />

                <label>
                    Mobile:
            <input type="text" value={this.state.person.mobile} onChange={this.handleChange('mobile')} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default NameForm;