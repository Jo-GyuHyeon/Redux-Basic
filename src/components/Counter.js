import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

  render() {
    return (
      <div>
        <h1> {this.props.value}</h1>
      </div>
    );
  }
}

let mapStateToProps = (state) =>{
  //store 의 state 를 지금 클래스의 props로 매핑 시켜준다.
    return{
      //store에서 reduce(counter라는 reduce)객체 (속성중 value를 작성했었다.) reduce/index.js 확인
      value:state.counter.value
    };
}

Counter = connect(mapStateToProps)(Counter);
//react-redux의 내장 api ReactComponent 를 Redux Store 에 연결 시켜준다.

export default Counter;