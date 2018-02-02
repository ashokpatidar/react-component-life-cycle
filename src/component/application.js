import React from "react";
import Counter from "./counter";

class Application extends React.Component {
  state = {
    counter: 0,
    isCounterHidden: true
  };

  incrementCounter = () => {
    console.log("increment");
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  toggleCounter = () => {
    console.log("toggle");
    this.setState(prevState => ({
      isCounterHidden: !prevState.isCounterHidden
    }));
  };

  render() {
    let style = {
      marginTop: "40px",
      marginBotton: "40px"
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 text-center">
            <p style={style}>
              Make Sure To open developer tools consoles before you click
              anything
            </p>
            <div className="btn-group btn-group-lg">
            <button className="btn btn-default" onClick={this.toggleCounter}>{this.state.isCounterHidden?'SHOW':'HIDE'}</button>
            <button className="btn btn-success" onClick={this.incrementCounter}>Increment</button>
            </div>
            
            {this.state.isCounterHidden ? null : (
              <Counter value={this.state.counter} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Application;
