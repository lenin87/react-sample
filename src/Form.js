import React from 'react';
import ReactDOM from 'react-dom';   

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : ''
        }
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    };
    updateState (e){
        console.log(e);
        this.setState({data : e.target.value})
    }
    clearInput(){
        this.setState({data:''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    render(){
        return (
            <div>
                <input type="text" ref="myInput" onChange={this.updateState} value={this.state.data} />
              <button onClick={this.clearInput}>Clear</button>
                <h4>{this.state.data}</h4>
            </div>
        )
    }
}
export  default Form