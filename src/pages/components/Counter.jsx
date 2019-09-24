
import React from 'react';

import PropTypes from 'prop-types'


class App extends React.Component{
  // state={
  //   count:0
  // }
 
  static PropTypes1 ={
    count:PropTypes.object.isRequired,
    increment:PropTypes.func.isRequired,
    decrement:PropTypes.func.isRequired
  };
  constructor(props){ 
    super(props)
    this.numberRef = React.createRef()
  }
  increment=()=>{
    const number = this.numberRef.current.value*1
    this.props.increment(number)
    // this.props.store.dispatch(increment(number))
    // this.setState(state=>({count:state.count+number}))
  }
  decrement=()=>{
    const number = this.numberRef.current.value*1
    this.props.decrement(number)
    // this.props.store.dispatch(decrement(number))
    // this.setState(state=>({count:state.count-number}))
  }
  incrementIfOdd=()=>{
    const number = this.numberRef.current.value*1
    if(this.state.count%2===1){
      this.setState(state=>({count:state.count+number}))
    }
  }
  incrementAsync=()=>{
    const number = this.numberRef.current.value*1;
    this.props.incrementAsync(number)
  }
  render(){
    // console.log(this.props.count)
    // const count = this.props.store.getState()
    const count = this.props.count
    return (
      <div>
        <p>click {count} times</p>
        <select ref={this.numberRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> 
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}
export default App;

