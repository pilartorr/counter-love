import React, { Component, Fragment } from 'react';


class Counter extends Component {

    render(){

      const {value, onIncrement, onDecrement} = this.props;

      return (

          <div className="input-group mb-3">

            <div className="input-group-prepend">
              <button className="decrement input-group-text" onClick={onDecrement}>-</button>
            </div>

            <input type="text" className="form-control" aria-label="Amount" value={value} readOnly/>

            <div className="input-group-append">
              <button className="increment input-group-text" onClick={onIncrement}>+</button>
            </div>

          </div>

      );
    }

  }


export default Counter;
