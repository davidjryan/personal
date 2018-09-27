import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      main,
      secondary,
      
    }
  }

  render() {
    return (
      <nav id="site-nav">
        <div id="main-nav">
          <a className="button home" onClick={this.handleClick}>Home</a>
          <a className="button code" onClick={this.handleClick}>Code</a>
          <a className="button sound" onClick={this.handleClick}>Sound</a>
        </div>
        <div id="sub-nav">
          <a className="button">Home</a>
          <a className="button">Code</a>
          <a className="button">Sound</a>
        </div>
      </nav>
    )
  }
}