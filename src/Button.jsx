import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };
  }

  componentDidMount() {
    console.log('didMoun');
  }

  componentWillMount() {
    console.log('will mount');
  }

  componentDidUpdate() {
    console.log('didMoun');
  }

  componentWillUpdate() {
    console.log('will mount');
  }

  handleClick = () => {
    console.log('click');

    this.setState((prev) => {});
  };

  // static defaultProps = {
  //   a: 'test',
  // };

  // state = {
  //   counter: 1,
  // };

  render() {
    console.log(' render');
    return <button onClick={this.handleClick}>{this.state.counter}</button>;
  }
}
