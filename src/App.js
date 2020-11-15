import React from "react";
import background from "./img/IMG_2186.jpg";
import cmflg1 from "./img/camouflage1.jpeg";
import cmflg2 from "./img/camouflage2.jpeg";
import cmflg3 from "./img/camouflage3.jpeg";
import cmflg4 from "./img/camouflage4.jpeg";
import nbp from "./img/national-business-park.png";
import ReactPlayer from "react-player";
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <div className="wrapper">
          <div
            id="box1"
            className="box"
            style={{ backgroundImage: `url(${cmflg1})` }}
          >
            <div className="box-empty"></div>
          </div>

          <div id="box2" className="box">
            <a
              href="https://www.google.com/maps/place/410+National+Business+Pkwy,+Annapolis+Junction,+MD+20701,+USA/@39.134935,-76.7697111,1142m/data=!3m1!1e3!4m5!3m4!1s0x89b7e6d1d529fbab:0x7e75297c4fb8327b!8m2!3d39.1346854!4d-76.7684558?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="box-image"
                src={nbp}
                alt="National Business Park"
              />
            </a>
          </div>

          <div
            id="box3"
            className="box"
            style={{ backgroundImage: `url(${cmflg2})` }}
          >
            <div className="box-empty"></div>
          </div>
          <div id="box4" className="box">
            <p className="title">Rogers and Eden</p>
          </div>
          <div id="box5" className="box">
            <div className="box-empty"></div>
          </div>
          <div id="box6" className="box">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=bs3Et540-_s"
            alt={"inside-a-google-data-center"}
            controls={true}
            width="30vw"
            height="30vh"
          />
          </div>
          <div
            id="box7"
            className="box"
            style={{ backgroundImage: `url(${cmflg3})` }}
          >
            <div className="box-empty"></div>
          </div>
          <div id="box8" className="box">
            <p className="title">Gekker and Knight</p>
          </div>
          <div
            id="box9"
            className="box"
            style={{ backgroundImage: `url(${cmflg4})` }}
          >
            <div className="box-empty"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
