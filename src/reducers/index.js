import {INCREMENT, DECREMENT, SET_DIF} from '../actions';
import {combineReducers}from 'redux';

const counterInitalState = {
  value: 0,
  diff: 1
};

const counter = (state=counterInitalState, action) => {
  switch(action.type){
    case INCREMENT:
      return Object.assign({},state,{
        value: state.value + state.diff
      });
    case DECREMENT:
      return Object.assign({}, state,{
        value: state.value - state.diff
      });
    case SET_DIF:
      return Object.assign({},state,{
        diff: action.diff
      });
    default:
       return state;
  }
}

const extra = (state = {value:'this is extra_reducer'}, action) =>{
  switch(action.type){
    default:
      return state;
  }
}

const counterApp = combineReducers({
  //combineReducers 는 여러가지 reducer를 한개로 합칠때 사용
  //key 값으로 사용하고 싶다면 counterkey : counter 이런식으로 사용
  counter,
  extra
});

export default counterApp;