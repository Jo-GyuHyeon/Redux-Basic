import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setDiff} from '../actions';

class Option extends Component {
  state = {
    diff:1
  }

  onChangeDiff = (e) =>{
    
    if(isNaN(e.target.value))
      return;
    
      this.setState({
        diff: e.target.value
      });

      if(e.target.value ===''){
        this.setState({
          diff:'0'
        });
      }

      const value = parseInt(e.target.value,10)
      this.props.onChangeDiff(value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.diff}
          onChange={this.onChangeDiff}
        />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) =>{
  return{
    onChangeDiff: (value) => dispatch(setDiff(value))
  }
}

Option = connect(undefined, mapDispatchToProps)(Option)

export default Option;