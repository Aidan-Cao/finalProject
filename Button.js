import React, {component}  from 'react';

export class Counter extends React.component{
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
        if (this.state.clicks >= 0){
            this.setState({clicks: this.state.clicks - 1});
        }
    }
    Reset = () => {
        this.setState({reset: this.state.clicks = 0});
    }



    render(){
        return(
        <button onClick={AddOne}>Add One</button>
        <button onClick={MinusOne}>Minus One</button>
        <button onClick={Reset}>Set to 0</button>
        <p>The buttons have been clicked {this.state.clicks} times.</p>
            );
        
    }
}

export default Counter;