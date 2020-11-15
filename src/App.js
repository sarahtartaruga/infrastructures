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
      <div className="App">
        <header className="App-header" style={{backgroundImage: `url(${background})`}}>
          <p className="p-title">
            SURVEILLANCE CULTURES INFRASTRUCTURES
          </p>
        </header>
      </div>
    );
  }
}

export default App;
