import React from 'react';
import {connect} from 'react-redux'
import Counter from '../components/Counter'
import {increment,decrement,incrementAsync} from '../redux/actions'

// function mapStateToProps(state){
//   return {
//     count:state
//   }
// }
// function mapDispatchToProps(dispatch){
//   return {
//     increment:(number)=>dispatch(increment(number)),
//     decrement:(number)=>dispatch(decrement(number))
//   }
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)
export default connect(
  state=>({count:state.count}),
  {increment,decrement,incrementAsync}
)(Counter)
