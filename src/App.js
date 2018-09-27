import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  handleClick(id) {

  }

  render() {
    return <div className="App">
        <main>
          <header className="App-header">
            <h1 className="App-title">
              <span>D</span>avid <span>J</span> <span>R</span>yan
            </h1>
          </header>
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
          <section id="content-holder">
            <h2 className="content-title">Selected Works & Highlights</h2>
            <section className="preview-container">
              {/* <Route path="/" component={Home}/>
            <Route path="/code" component={Code}/>
            <Route path="/sound" component={Sound}/> */}
              <article className="preview-thumb">
                <a href="">
                  <div className="preview-title" />
                </a>
              </article>
              <article className="preview-thumb">
                <a href="">
                  <div className="preview-title" />
                </a>
              </article>
              <article className="preview-thumb">
                <a href="">
                  <div className="preview-title" />
                </a>
              </article>
            </section>
          </section>
        </main>
        <footer />
      </div>;
  }
}

export default App;
