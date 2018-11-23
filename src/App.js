import React, { Component, Fragment } from 'react';
import Counter from './components/Counter';
import Hearts from './components/Hearts';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }

  onIncrement = () => {
     this.setState({
       count: this.state.count + 1
     });
  }

  onDecrement = () => {
     if(this.state.count <= 0) return;

     this.setState({
       count: this.state.count - 1
     });


   }

  render() {

    return (
      <Fragment>
        <div className="container wrapper">
          <h1 className="load h1">COUNTER LOVE</h1>
          <Counter
            value={this.state.count}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}/>
          <Hearts count={this.state.count} />
        </div>
      </Fragment>
    );
  }
}

export default App;
