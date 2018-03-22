import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <span>D</span>avid <span>J</span> <span>R</span>yan
          </h1>
        </header>
        <nav id="site-nav">
          <div id="main-nav">
            <a class="button" href="/">Home</a>
            <a class="button" href="/code">Code</a>
            <a class="button" href="/audio">Audio</a>
          </div>
          <div id="sub-nav">
            <a class="button">Home</a>
            <a class="button">Code</a>
            <a class="button">Audio</a>
          </div>
        </nav>
        <section id="content-holder">
          
        </section>
      </div>;
  }
}

export default App;
