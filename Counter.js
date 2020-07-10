import React, {Component}  from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {clicks: 0};
    }

    AddOne = () => {
        if (this.state.clicks < 10 ){
            this.setState({clicks: this.state.clicks + 1});
        }
    }
    MinusOne = () => {
        if (this.state.clicks > 0){
            this.setState({clicks: this.state.clicks - 1});
        }
    }
    Reset = () => {
        this.setState({reset: this.state.clicks = 0});
    }



    render(){
        return(
            <>
        <button onClick={this.AddOne}>Add One</button>
        <button onClick={this.MinusOne}>Minus One</button>
        <button onClick={this.Reset}>Set to 0</button>
        <p>Count: {this.state.clicks}</p>
           
        </>
         );
    }
}

export default Counter;