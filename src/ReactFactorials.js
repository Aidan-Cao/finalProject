/*
import React, {Component} from 'react'
render(){
        return(


        )
    }

factorial(){
    this.setState({counter: 1})
    var size = document.getElementById('factorial').value
    var ret = 1
    for(var i = 0;i<size;i++ ){
        ret = ret * (i+1)
    }
    this.setState({flag: true, counter: ret})
} 
*/
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 4;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);


  
  factorial(){
    this.setState({counter: 1})
    var size = document.getElementById('factorial').value
    var ret = 1
    for(var i = 0;i<size;i++ ){
        ret = ret * (i+1)
    }
    this.setState({flag: true, counter: ret})
} 
From Naeem to Everyone: (1:53 PM)
 import React, {Component} from 'react'

export default class Factorial extends React.Component{

constructor(props){
    super(props);
    this.state = {
        counter : 1,
        flag : false
    };
}

factorial(){
    this.setState({counter: 1})
    var size = document.getElementById('factorial').value
    var ret = 1
    for(var i = 0;i<size;i++ ){
        ret = ret * (i+1)
    }
    this.setState({flag: true, counter: ret})
}

render(){
    return(
        <div className = 'function2'>
            <input id = 'factorial' />
            <button onClick = {(e) => this.factorial(e)}> Submit</button>
            <p> 
                {(this.state.flag)?"the factorial is " + this.state.counter:"enter number to start"}
            </p>
        </div>
    );
}
} 