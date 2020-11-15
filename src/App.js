import React from 'react';
import logo from './img/IMG_2184.png';
import background from './img/IMG_2186.jpg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App"  style={{backgroundImage: `url(${background})`}}>
      <div class="wrapper">
      <div id="box1" class="box"><p>One</p></div>
      <div id="box2" class="box">Two</div>
      <div id="box3" class="box">Three</div>
      <div id="box4" class="box">Four</div>
      <div id="box5" class="box">Five</div>
      <div id="box6" class="box">Six</div>
      <div id="box7" class="box">Seven</div>
      <div id="box8" class="box">Eight</div>
      <div id="box9" class="box">Nine</div>
      </div>
      </div>
    );
  }
}

export default App;
