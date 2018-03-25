import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constuctor() {
    this.state= {

    }
  }
  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <span>D</span>avid <span>J</span> <span>R</span>yan
          </h1>
        </header>
        <nav id="site-nav">
          <div id="main-nav">
            <a class="button home" >Home</a>
            <a class="button code" >Code</a>
            <a class="button sound" >Sound</a>
          </div>
          <div id="sub-nav">
            <a class="button">Home</a>
            <a class="button">Code</a>
            <a class="button">Sound</a>
          </div>
        </nav>
        <main id="content-holder">
          <h2 class="content-title">Selected Works & Highlights</h2>
          <section class="previews">
            {/* <Route path="/" component={Home}/>
            <Route path="/code" component={Code}/>
            <Route path="/sound" component={Sound}/> */}
            <article class="preview-thumb">
              
            </article>

          </section>
        </main>
      </div>;
  }
}

export default App;
