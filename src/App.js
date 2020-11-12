import logo from './img/IMG_2184.png';
import background from './img/IMG_2186.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage: `url(${background})`}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Surveillance cultures - infrastructures
        </p>
      </header>
    </div>
  );
}

export default App;
