import React from "react";

class Counter extends React.Component {

    state = {
        time:{}
    }
  componentWillMount() {
    console.debug("componentWillMount");
  }

  componentDidCatch() {
    console.debug("componentDidCatch");
  }

  componentWillReceiveProps() {
    console.debug("componentWillReceiveProps");
  }

  componentWillUpdate() {
    console.debug("componentWillUpdate");
  }

  shouldComponentUpdate() {
    console.debug("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.debug("componentDidUpdate");
  }

  test = () => {
      this.setState({time:new Date(Date.now())});
  }
  

  componentDidMount() {
    this.interval = setInterval(this.test, 10000);
    console.debug("componentDidMount");
  }

  componentWillUnmount() {
      console.log(this.labels);
      clearInterval(this.interval);
    console.debug("componentWillUnmount");
  }

  render() {
    console.debug("render");
    
    return (
    <div>
    <h1 ref={(input) => { this.labels = input; }}>Counter: {this.props.value}</h1>
    
    {JSON.stringify(this.state.time)}
    </div>
    )
  }
}

export default Counter;
