
import {INCREMENT,DECREMENT} from './action-types'
export const increment = number =>({type:INCREMENT,data:number})
export const decrement = number =>({type:DECREMENT,data:number})

export const incrementAsync = number => {
  // setTimeout(()=>{
  //   return {type:INCREMENT,data:number}
  // },1000)

  return dispatch =>{
    setTimeout(()=>{
      dispatch(increment(number))
    },1000)
  }
}